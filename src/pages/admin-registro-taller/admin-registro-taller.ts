import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController} from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker'
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { HttpProvider } from '../../providers/http/http';
import { Geolocation } from '@ionic-native/geolocation';
@IonicPage()
@Component({
   selector: 'page-admin-registro-taller',
   templateUrl: 'admin-registro-taller.html',
})
export class AdminRegistroTallerPage {
   picToView: "assets/imgs/taller.png"
   txt_taller_nombre
   txt_taller_descripcion
   txt_taller_mail
   txt_taller_password
   txt_taller_rpassword
   reg_status
   txt_taller_ubicacion
   txt_taller_logo
   status
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
      this.picToView = "assets/imgs/taller.png"
      this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp_geo) => {
         this.txt_taller_ubicacion = resp_geo.coords.latitude + " ; " + resp_geo.coords.longitude
      }).catch(error => {
         this.txt_taller_ubicacion = '0.0 ; 0.0'
         this.alertCtrl.create({
            title: this.validar.mensajes('E6').d,
            subTitle: this.validar.mensajes('E6').d,
            buttons: ['Aceptar']
         }).present();
      })
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
   guardarTaller() {
      var nombre = this.txt_taller_nombre
      var descripcion = this.txt_taller_descripcion
      var mail = this.txt_taller_mail
      var pass = this.txt_taller_password
      var rpass = this.txt_taller_rpassword

      if (!this.validar.validar_vacios([nombre, descripcion, mail, pass, rpass])) {
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
      if (pass.length < 8 || rpass.length < 8) {
         this.alertCtrl.create({
            title: this.validar.mensajes('E3').t,
            subTitle: this.validar.mensajes('E3').d,
            buttons: ['Aceptar']
         }).present();
         return;
      }
      if (pass != rpass) {
         this.alertCtrl.create({
            title: this.validar.mensajes('E4').t,
            subTitle: this.validar.mensajes('E4').d,
            buttons: ['Aceptar']
         }).present();
         return;
      }
      this.completarRegistro(this.txt_taller_logo, this.txt_taller_ubicacion, nombre, descripcion, mail, pass)
   }
   completarRegistro(imagen, ubicacion, nombre, descripcion, mail, pass) {
      this.reg_status = false
      this.status = true
      let postdata = new FormData()
      postdata.append('logotipo', this.txt_taller_logo)
      postdata.append('ubicacion', this.txt_taller_ubicacion)
      postdata.append('nombre', this.txt_taller_nombre)
      postdata.append('descripcion', this.txt_taller_descripcion)
      postdata.append('mail', this.txt_taller_mail)
      postdata.append('pass', this.txt_taller_password)
      this.http.registrarTaller(postdata).subscribe((data) => {
         var resultado = this.validar.mensajes(data.text()).t
         if (resultado == 'Listo') {
            this.alertCtrl.create({
               title: 'Cuenta registrada con éxito',
               subTitle: 'Ahora se puede iniciar sesión',
               buttons: [{
                  text: 'Aceptar',
                  role: 'cancel',
                  handler: data => { this.navCtrl.popToRoot() }
               }]
            }).present();
         } else {
            this.alertCtrl.create({
               title: this.validar.mensajes(data.text()).t,
               subTitle: this.validar.mensajes(data.text()).d,
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
   ubicar() {
      var modal_mapa = this.modalCtrl.create('MapaObtenerPage')
      modal_mapa.onDidDismiss(punto => { this.txt_taller_ubicacion = punto.coordenadas })
      modal_mapa.present();
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
}
