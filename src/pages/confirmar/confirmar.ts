import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from './../../providers/http/http';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';


@IonicPage()
@Component({
  selector: 'page-confirmar',
  templateUrl: 'confirmar.html',
})
export class ConfirmarPage {
  reg_status
  status
  txt_mail_confirmar
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public validar:ValidacionesProvider,
    public http: HttpProvider
  ) {
    this.reg_status = true
    this.status = false
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmarPage');
  }
  Reconfirmar(){
    if (!this.validar.validar_vacios([this.txt_mail_confirmar])) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E1').t,
        subTitle: this.validar.mensajes('E1').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    if (this.validar.validar_correo(this.txt_mail_confirmar)) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E2').t,
        subTitle: this.validar.mensajes('E2').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    this.reg_status = false
    this.status = true
    this.http.confirmar_http(this.txt_mail_confirmar).subscribe((data)=>{
      var resultado = this.validar.mensajes(data.text()).t
      if (resultado == 'Listo') {
        this.alertCtrl.create({
          title: 'Listo',
          subTitle: 'Revise su email para confirmar su cuenta',
          buttons: [{
            text: 'Aceptar',
            role: 'cancel',
            handler: data => {
              this.navCtrl.popToRoot()
            }
          }]
        }).present();
        this.reg_status = true
        this.status = false
      }else{
        this.alertCtrl.create({
          title: this.validar.mensajes(data.text()).t,
          subTitle: this.validar.mensajes(data.text()).d,
          buttons: ['Aceptar']
        }).present();
        this.reg_status = true
        this.status = false
      }
    },(error)=>{
      this.alertCtrl.create({
        title: this.validar.mensajes('E0').t,
        subTitle: this.validar.mensajes('E0').t,
        buttons: ['Aceptar']
      }).present();
      this.reg_status = true
      this.status = false
    })
  }
}
