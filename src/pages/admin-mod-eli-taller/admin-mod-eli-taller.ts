import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { HttpProvider } from '../../providers/http/http';


@IonicPage()
@Component({
  selector: 'page-admin-mod-eli-taller',
  templateUrl: 'admin-mod-eli-taller.html',
})
export class AdminModEliTallerPage {
  talleres: any
  parametro = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private validar: ValidacionesProvider,
    private alertCtrl: AlertController,
    private http: HttpProvider
  ) {
    this.getTalleres()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminModEliTallerPage');
  }
  getTalleres() {
    this.http.obtenerTalleres().subscribe((data) => {
      this.talleres = data.json()
    }, (error) => {
      this.alertCtrl.create({
        title: this.validar.mensajes('E0').t,
        subTitle: this.validar.mensajes('E0').d,
        buttons: [{ text: 'Aceptar', role: 'cancel', handler: data => { this.navCtrl.popToRoot() } }]
      }).present();
    })
  }
  buscarTaller() {
    var busqueda = (this.parametro).toLowerCase()
    var selection = document.getElementsByClassName('taleres-reg')
    for (var i = 0; i < selection.length; i++) {
      var nomTall = selection[i].getElementsByClassName('tal-nom')[0].innerHTML
      selection[i].removeAttribute('style')
      if (nomTall.toLowerCase().indexOf(busqueda) > -1) {
        selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;')
      } else {
        selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;display:none')
      }
    }
  }
  eliminarTaller(identidad) {
    this.alertCtrl.create({
      title: 'Confirmar eliminación',
      message: 'Está seguro de eliminar el taller',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.http.eliminarTaller(identidad).subscribe((data) => {
              var resultado = this.validar.mensajes(data.text()).t
              if (resultado == 'Listo') {
                this.getTalleres()
              } else {
                this.alertCtrl.create({
                  title: this.validar.mensajes(data.text()).t,
                  subTitle: this.validar.mensajes(data.text()).d,
                  buttons: ['Aceptar']
                }).present();
              }
            }, (error) => {
              this.alertCtrl.create({
                title: this.validar.mensajes('E0').t,
                subTitle: this.validar.mensajes('E0').d,
                buttons: [{ text: 'Aceptar', role: 'cancel', handler: data => { this.navCtrl.popToRoot() } }]
              }).present();
            })
          }
        }
      ]
    }).present()
  }
}
