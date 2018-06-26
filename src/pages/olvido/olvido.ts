import { HttpProvider } from './../../providers/http/http';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-olvido',
  templateUrl: 'olvido.html',
})
export class OlvidoPage {
  txt_mail_olvido
  reg_status
  status
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
    console.log('ionViewDidLoad OlvidoPage');
  }
  
  Recuperar(){
    if (!this.validar.validar_vacios([this.txt_mail_olvido])) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E1').t,
        subTitle: this.validar.mensajes('E1').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    if (this.validar.validar_correo(this.txt_mail_olvido)) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E2').t,
        subTitle: this.validar.mensajes('E2').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    this.reg_status = false
    this.status = true
    this.http.recuperar_http(this.txt_mail_olvido).subscribe((data)=>{
      var resultado = this.validar.mensajes(data.text()).t
      if (resultado == 'Listo') {
        this.alertCtrl.create({
          title: 'Listo',
          subTitle: 'Revise su email para recuperar su cuenta',
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
