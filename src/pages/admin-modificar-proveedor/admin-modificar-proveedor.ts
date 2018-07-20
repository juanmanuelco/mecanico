import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker'
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-admin-modificar-proveedor',
  templateUrl: 'admin-modificar-proveedor.html',
})
export class AdminModificarProveedorPage {
  nombre: any;
  picToView: "assets/imgs/proveedor.png"
  txt_proveedor_nombre
  txt_proveedor_descripcion
  txt_proveedor_mail
  reg_status
  txt_proveedor_logo
  status
  identidad
  txt_proveedor_identidad
  txt_proveedor_mail_paypal=""
  txt_proveedor_numero_cuenta
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private validar: ValidacionesProvider,
    private imagePicker: ImagePicker,
    private http: HttpProvider,
    public modalCtrl: ModalController,
  ) {
    this.reg_status = true
    this.status = false
  }

  ionViewDidLoad() {
    this.nombre = this.navParams.get('nombre')
    this.picToView = this.navParams.get('imagen')
    this.txt_proveedor_nombre = this.nombre
    this.txt_proveedor_descripcion = this.navParams.get('descripcion')
    this.txt_proveedor_mail = this.navParams.get('mail')
    this.txt_proveedor_identidad = this.navParams.get('identidad')
    this.txt_proveedor_mail_paypal = this.navParams.get('paypal')
    this.txt_proveedor_numero_cuenta = this.navParams.get('cuenta')
  }
  escogerLogotipo() {
    this.imagePicker.getPictures({ maximumImagesCount: 1 }).then((results) => {
      this.picToView = results[0]
      this.toDataUrl(this.picToView, (myBase64) => {
        this.txt_proveedor_logo = myBase64.toString()
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
  guardarProveedor() {
    var nombre = this.txt_proveedor_nombre
    var descripcion = this.txt_proveedor_descripcion
    var mail = this.txt_proveedor_mail
    var paypal = (this.txt_proveedor_mail_paypal).trim()
    var cuenta = this.txt_proveedor_numero_cuenta
    if (!this.validar.validar_vacios([nombre, descripcion, mail])) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E1').t,
        subTitle: this.validar.mensajes('E1').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    var cap = false
    if (paypal.length>2) {
      if (this.validar.validar_correo(paypal)) {
        this.alertCtrl.create({
          title: this.validar.mensajes('E2').t,
          subTitle: this.validar.mensajes('E2').d,
          buttons: ['Aceptar']
        }).present();
        return;
      }
    }
    if (this.validar.validar_correo(mail)) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E2').t,
        subTitle: this.validar.mensajes('E2').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    this.completarModificacion()
  }
  completarModificacion() {
    this.reg_status = false
    this.status = true
    var postdata = new FormData()
    postdata.append('identidad', this.txt_proveedor_identidad)
    postdata.append('logotipo', this.txt_proveedor_logo)
    postdata.append('nombre', this.txt_proveedor_nombre)
    postdata.append('descripcion', this.txt_proveedor_descripcion)
    postdata.append('mail', this.txt_proveedor_mail)
    postdata.append('paypal', this.txt_proveedor_mail_paypal)
    postdata.append('cuenta', this.txt_proveedor_numero_cuenta)
    this.http.modificarProveedor(postdata).subscribe((data) => {
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
        subTitle: error.toString(),
        buttons: ['Aceptar']
      }).present();
      this.reg_status = true
      this.status = false
    })
  }
}
