import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-taller-registro-mecanico',
  templateUrl: 'taller-registro-mecanico.html',
})
export class TallerRegistroMecanicoPage {
  txt_mecanico_taller=""
  txt_mecanico_nombre
  txt_mecanico_mail
  txt_mecanico_password
  txt_mecanico_rpassword
  reg_status
  status
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private sqlite: SQLite,
    private http: HttpProvider,
    public validar:ValidacionesProvider,
    private geolocation: Geolocation
  ) {
    this.sqlite.create({
      name: 'mecanico.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql(`SELECT * FROM usuario`,[]).then((usuario)=>{
        this.txt_mecanico_taller= usuario.rows.item(0).identidad
      }).catch((error)=>{ 
        this.cerrarSesion
      })
    }).catch((error)=>{
      this.cerrarSesion
    })
    this.reg_status = true
    this.status = false
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TallerRegistroMecanicoPage');
  }
  cerrarSesion(){
    this.alertCtrl.create({
      title: 'Error de sesión',
      subTitle: 'Vuelva a iniciar sesión',
      buttons: [{
        text: 'Aceptar',
        role: 'cancel',
        handler: data => {
          this.validar.logout()
        }
      }]
    }).present();
  }
  Registrar(){
    var nombre = this.txt_mecanico_nombre;
    var mail = this.txt_mecanico_mail;
    var pass = this.txt_mecanico_password;
    var rpass = this.txt_mecanico_rpassword;
    var taller= this.txt_mecanico_taller;
    if (!this.validar.validar_vacios([nombre, mail, pass, rpass, taller])) {
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
    this.completarRegistro(nombre, mail, taller, pass)
  }
  completarRegistro(nombre, mail, taller, pass){
    var latitud, longitud
    this.reg_status = false
    this.status = true
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp_geo) => {
      latitud = resp_geo.coords.latitude
      longitud = resp_geo.coords.longitude
      this.http.registrarMecanico(nombre, taller, mail, pass, latitud, longitud).subscribe((data) => {
        var resultado = this.validar.mensajes(data.text()).t
        if (resultado == 'Listo') {
          this.alertCtrl.create({
            title: 'Cuenta registrada con éxito',
            subTitle: 'Ahora se puede iniciar sesión',
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
          title: this.validar.mensajes('E0').d,
          subTitle: this.validar.mensajes('E0').d,
          buttons: ['Aceptar']
        }).present();
        this.reg_status = true
        this.status = false
      })
    }).catch((error) => {
      this.alertCtrl.create({
        title: this.validar.mensajes('E6').t,
        subTitle: this.validar.mensajes('E6').d,
        buttons: [{ text: 'Aceptar', role: 'cancel', handler: data => { this.navCtrl.popToRoot() } }]
      }).present();
      this.reg_status = true
      this.status = false
    })
  }
}
