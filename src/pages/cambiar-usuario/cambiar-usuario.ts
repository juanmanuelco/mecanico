import { ValinternoProvider } from '../../providers/valinterno/valinterno';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@IonicPage()
@Component({
  selector: 'page-cambiar-usuario',
  templateUrl: 'cambiar-usuario.html',
})
export class CambiarUsuarioPage {
  txt_pass_cambiar
  txt_npass_cambiar
  txt_rnpass_cambiar
  reg_status
  status
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpProvider,
    private validar: ValinternoProvider,
    private sqlite: SQLite,
    private alertCtrl: AlertController
  ) {
    this.reg_status = true
    this.status = false
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarUsuarioPage');
  }
  cambiarP(){
    var pass=this.txt_pass_cambiar
    var npass= this.txt_npass_cambiar
    var rnpass=this.txt_rnpass_cambiar
    if (!this.validar.validar_vacios([pass, npass, rnpass])) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E1').t,
        subTitle: this.validar.mensajes('E1').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    if (pass.length < 8 || npass.length < 8 || rnpass.length < 8) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E3').t,
        subTitle: this.validar.mensajes('E3').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    if(rnpass!=npass){
      this.alertCtrl.create({
        title: this.validar.mensajes('E4').t,
        subTitle: this.validar.mensajes('E4').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    this.reg_status = false
    this.status = true
    this.sqlite.create({
      name: 'mecanico.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * from usuario',[]).then((data)=>{
        let lists = [];
        for(let i=0; i<data.rows.length; i++){
          lists.push(data.rows.item(i));
        }
        var identidad=lists[0].identidad
        var token= lists[0].token
        var usuario=lists[0].username 
        this.http.cambiarPassword(usuario, identidad, token, pass,npass).subscribe((data)=>{
          var resultado = this.validar.mensajes(data.text()).t
          if (resultado == 'Listo') {
            this.alertCtrl.create({
              title: 'Listo',
              subTitle: 'Contraseña cambiada exitosamente',
              buttons: [{
                text: 'Aeptar',
                role: 'cancel',
                handler: data => {
                  this.navCtrl.popToRoot()
                }
              }]
            }).present();
          }else{
            this.alertCtrl.create({
              title: this.validar.mensajes(data.text()).t,
              subTitle: this.validar.mensajes(data.text()).d,
              buttons: ['Aceptar']
            }).present();
          }
          this.reg_status = true
          this.status = false
        }, (error)=>{
          this.alertCtrl.create({
            title: this.validar.mensajes('E0').t,
            subTitle: this.validar.mensajes('E0').d,
            buttons: ['Aceptar']
          }).present();
          return;
        })
      }).catch((error)=>{
        this.alertCtrl.create({
          title: this.validar.mensajes('E0').t,
          subTitle: this.validar.mensajes('E0').d,
          buttons: ['Aceptar']
        }).present();
        return;
      })
    }).catch((error)=>{
      this.alertCtrl.create({
        title: this.validar.mensajes('E0').t,
        subTitle: this.validar.mensajes('E0').d,
        buttons: ['Aceptar']
      }).present();
      return;
    })
  }
}
