import { ConfirmarPage } from '../confirmar/confirmar';
import { OlvidoPage } from '../olvido/olvido';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { RegistroPage } from '../registro/registro';

import { HttpProvider } from '../../providers/http/http';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  txt_mail_login;
  txt_password_login;
  regP = RegistroPage;
  olvP=OlvidoPage
  confP=ConfirmarPage
  status
  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private http: HttpProvider,
    private validar: ValidacionesProvider,
    private sqlite: SQLite
  ) {

  }
  ionViewDidLoad() {
    this.cargarDB();
  }
  cargarDB() {
    this.sqlite.create({
      name: 'mecanico.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql(`CREATE TABLE IF NOT EXISTS usuario(
        "identidad" INTEGER PRIMARY KEY, 
        "nombre" TEXT, 
        "username" TEXT, 
        "rol" INTEGER, 
        "token" TEXT,
        "longitud" REAL,
        "latitud" REAL
      )`, []).then((res) => { }).catch((e) => {  });
      db.executeSql(`SELECT * FROM usuario`,[]).then((usuario)=>{
        try { 
          this.navCtrl.setRoot(this.validar.rootPage(Number(usuario.rows.item(0).rol)))
          this.navCtrl.popToRoot()
        } catch (error) { }
      }).catch((error)=>{ })
    }).catch((e) => { });
  }
  logear() {
    //Si no se ingresa nada
    var usuario = this.txt_mail_login;
    var pass = this.txt_password_login;

    if (!this.validar.validar_vacios([usuario, pass])) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E1').t,
        subTitle: this.validar.mensajes('E1').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }

    //Si la contraseña es menor que 8 dígitos
    if (pass.length < 8) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E3').t,
        subTitle: this.validar.mensajes('E3').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }

    if (this.validar.validar_correo(usuario)) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E2').t,
        subTitle: this.validar.mensajes('E2').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    this.iniciarSesion(usuario, pass);
  }

  iniciarSesion(user, pass) {
    this.status = true;
    this.http.logear_http(user, pass)
      .subscribe((data) => {
        var resultado = this.validar.mensajes(data.text()).t
        if (resultado == 'Listo') {
          this.guardarSesion(data.text())
        } else {
          this.alertCtrl.create({
            title: this.validar.mensajes(data.text()).t,
            subTitle: this.validar.mensajes(data.text()).d,
            buttons: ['Aceptar']
          }).present();
        }
        this.status = false
      }, (error) => {
        //Ocurrió un error en el servidor
        this.alertCtrl.create({
          title: this.validar.mensajes('E0').t,
          subTitle: this.validar.mensajes('E0').d,
          buttons: ['Aceptar']
        }).present();
        this.status = false
      })
  }

  guardarSesion(data) {
    var u=JSON.parse(data)
    var user=[
      Number(u.identidad),
      u.nombre,
      u.username,
      this.validar.Rol(u),
      u.token,
      Number(u.ubicacion[0]),
      Number(u.ubicacion[1])
    ]
    this.sqlite.create({
      name: 'mecanico.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql(`
        INSERT INTO usuario (identidad, nombre, username, rol, token, longitud, latitud) VALUES (?, ?, ?, ?, ?, ?, ?)
      `, user).then((resp) => {
        this.navCtrl.setRoot(this.validar.rootPage(user[3]))
        this.navCtrl.popToRoot()
        }).catch((error) => {
          console.log(error)
        })
    })
    
  }

} 
