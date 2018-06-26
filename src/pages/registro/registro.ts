//Angular
import { Component } from '@angular/core';

//Ionic
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//Providers
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { HttpProvider } from '../../providers/http/http';
import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  txt_nombre_registro
  txt_mail_registro
  txt_password_registro
  txt_rpassword_registro
  reg_status
  status
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private validar: ValidacionesProvider,
    private http: HttpProvider,
    private alertCtrl: AlertController,
    private geolocation: Geolocation
  ) {
    this.reg_status = true
    this.status = false
  }

  Registrar() {
    var nombre = this.txt_nombre_registro
    var mail = this.txt_mail_registro
    var pass = this.txt_password_registro
    var rpass = this.txt_rpassword_registro
    if (!this.validar.validar_vacios([nombre, mail, pass, rpass])) {
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

    this.completarRegistro(nombre, mail, pass, rpass)
  }

  completarRegistro(nombre, mail, pass, rpass) {
    var latitud, longitud
    this.reg_status = false
    this.status = true
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp_geo) => {
      latitud = resp_geo.coords.latitude
      longitud = resp_geo.coords.longitude
      this.http.registrar_http(nombre, mail, pass, rpass, latitud, longitud)
        .subscribe((data) => {
          var resultado = this.validar.mensajes(data.text()).t
          if (resultado == 'Listo') {
            this.alertCtrl.create({
              title: 'Cuenta registrada con éxito',
              subTitle: 'Ahora revise su email para confirmar su cuenta',
              buttons: [{
                text: 'Aceptar',
                role: 'cancel',
                handler: data => {
                  this.navCtrl.popToRoot()
                }
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
    }, (error_geo) => {
      this.alertCtrl.create({
        title: this.validar.mensajes('E6').d,
        subTitle: this.validar.mensajes('E6').d,
        buttons: ['Aceptar']
      }).present();
      this.reg_status = true
      this.status = false
    })

  }
}
