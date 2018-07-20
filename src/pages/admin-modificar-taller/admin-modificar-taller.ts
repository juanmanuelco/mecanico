import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker'
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { HttpProvider } from '../../providers/http/http';
import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
	selector: 'page-admin-modificar-taller',
	templateUrl: 'admin-modificar-taller.html',
})
export class AdminModificarTallerPage {
	nombre: any;
	picToView: "assets/imgs/taller.png"
	txt_taller_nombre
	txt_taller_descripcion
	txt_taller_mail
	reg_status
	txt_taller_ubicacion
	txt_taller_logo
	status
	identidad
	txt_taller_identidad
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private alertCtrl: AlertController,
		private validar: ValidacionesProvider,
		private imagePicker: ImagePicker,
		private http: HttpProvider,
		public modalCtrl: ModalController,
		private geolocation: Geolocation,
	) {
		this.reg_status = true
		this.status = false
	}

	ionViewDidLoad() {
		this.nombre = this.navParams.get('nombre')
		this.picToView = this.navParams.get('imagen')
		var ubicacion = this.navParams.get('ubicacion')
		this.txt_taller_ubicacion = ubicacion[0] + "; " + ubicacion[1]
		this.txt_taller_nombre = this.nombre
		this.txt_taller_descripcion = this.navParams.get('descripcion')
		this.txt_taller_mail = this.navParams.get('mail')
		this.txt_taller_identidad = this.navParams.get('identidad')
	} 
	escogerLogotipo() {
		this.imagePicker.getPictures({ maximumImagesCount: 1 }).then((results) => {
			this.picToView = results[0]
			this.toDataUrl(this.picToView, (myBase64) => {
				this.txt_taller_logo = myBase64.toString()
			});
		}, (err) => {
			this.alertCtrl.create({
				title: this.validar.mensajes('E12').t,
				subTitle: this.validar.mensajes('E12').d,
				buttons: ['Aceptar']
			}).present();
		});
	}
	toDataUrl(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.onload = () => {
			var reader = new FileReader();
			reader.onloadend = () => { callback(reader.result) }
			reader.readAsDataURL(xhr.response);
		};
		xhr.open('GET', url);
		xhr.responseType = 'blob';
		xhr.send();
	}
	ubicar() {
		var modal_mapa = this.modalCtrl.create('MapaObtenerPage', {puntos:this.txt_taller_ubicacion})
		modal_mapa.onDidDismiss(punto => { this.txt_taller_ubicacion = punto.coordenadas })
		modal_mapa.present();
	}
	guardarTaller() {
		var nombre = this.txt_taller_nombre
		var descripcion = this.txt_taller_descripcion
		var mail = this.txt_taller_mail
		if (!this.validar.validar_vacios([nombre, descripcion, mail])) {
			this.alertCtrl.create({
				title: this.validar.mensajes('E1').t,
				subTitle: this.validar.mensajes('E1').d,
				buttons: ['Aceptar']
			}).present();
			return;
		}
		if (this.validar.validar_correo(mail)) {
			this.alertCtrl.create({
				title: this.validar.mensajes('E2').t,
				subTitle: this.validar.mensajes('E2').d,
				buttons: ['Aceptar']
			}).present();
			return;
		}
		this.completarRegistro(this.txt_taller_logo, this.txt_taller_ubicacion, nombre, descripcion, mail)
	}
	completarRegistro(imagen, ubicacion, nombre, descripcion, mail) {
		this.reg_status = false
		this.status = true
		var postdata = new FormData()
		postdata.append('identidad', this.txt_taller_identidad)
		postdata.append('logotipo', imagen)
		postdata.append('ubicacion', ubicacion)
		postdata.append('nombre', nombre)
		postdata.append('descripcion', descripcion)
		postdata.append('mail', mail)
		this.http.modificarTaller(postdata).subscribe((data) => {
			var resultado = this.validar.mensajes(data.text()).t
			if (resultado == 'Listo') {
				this.alertCtrl.create({
					title: 'Taller actualizado',
					subTitle: 'Cambios guardados con exito',
					buttons: [{
						text: 'Aceptar',
						role: 'cancel',
						handler: data => { this.navCtrl.popToRoot() }
					}]
				}).present();
			} else {
				this.alertCtrl.create({
					title: "Error",
					subTitle: "Esta imágen es muy pesada",
					buttons: ['Aceptar']
				}).present();
			}
			this.reg_status = true
			this.status = false
		}, (error) => {
			this.alertCtrl.create({
				title: 'Error',
				subTitle: error.text(),
				buttons: ['Aceptar']
			}).present();
			this.reg_status = true
			this.status = false
		})
	}
}
