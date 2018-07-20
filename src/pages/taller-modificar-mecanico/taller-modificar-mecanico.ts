import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { HttpProvider } from '../../providers/http/http';


@IonicPage()
@Component({
  selector: 'page-taller-modificar-mecanico',
  templateUrl: 'taller-modificar-mecanico.html',
})
export class TallerModificarMecanicoPage {
  identidad
  txt_mecanico_nombre
  txt_mecanico_mail
  reg_status
  status
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private http: HttpProvider,
    private validar: ValidacionesProvider
  ) {
    this.reg_status = true
    this.status = false
  }

  ionViewDidLoad() {
    this.identidad = this.navParams.get('identidad')
    this.txt_mecanico_nombre = this.navParams.get('nombre')
    this.txt_mecanico_mail = this.navParams.get('mail')
  }
  guardar() {
    if (!this.validar.validar_vacios([this.txt_mecanico_nombre, this.txt_mecanico_mail])) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E1').t,
        subTitle: this.validar.mensajes('E1').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    if (this.validar.validar_correo(this.txt_mecanico_mail)) {
      this.alertCtrl.create({
        title: this.validar.mensajes('E2').t,
        subTitle: this.validar.mensajes('E2').d,
        buttons: ['Aceptar']
      }).present();
      return;
    }
    this.modificarMecanico(this.identidad, this.txt_mecanico_nombre, this.txt_mecanico_mail)
  }
  modificarMecanico(identidad, nombre, mail) {
    this.reg_status = false
    this.status = true
    this.http.modificarMecanicoTaller(identidad, nombre, mail).subscribe((data) => {
      var resultado = this.validar.mensajes(data.text()).t
      if (resultado == 'Listo') {
        this.alertCtrl.create({
          title: 'Mecánico actualizado',
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
          subTitle: "Error al enviar los datos",
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
