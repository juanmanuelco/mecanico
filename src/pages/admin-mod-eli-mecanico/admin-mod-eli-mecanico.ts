import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-admin-mod-eli-mecanico',
  templateUrl: 'admin-mod-eli-mecanico.html',
})
export class AdminModEliMecanicoPage {
  mecanicos: any
  parametro = "";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private validar: ValidacionesProvider,
    private alertCtrl: AlertController,
    private http: HttpProvider
  ) {
    this.getMecanicos()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminModEliMecanicoPage');
  }
  getMecanicos() {
    this.http.obtenerMecanicos().subscribe((data) => {
      this.mecanicos = data.json()
    }, (error) => {
      this.alertCtrl.create({
        title: this.validar.mensajes('E0').t,
        subTitle: this.validar.mensajes('E0').d,
        buttons: [{ text: 'Aceptar', role: 'cancel', handler: data => { this.navCtrl.popToRoot() } }]
      }).present();
    })
  } 
  buscarMecanico() {
    var busqueda = (this.parametro).toLowerCase()
    var selection = document.getElementsByClassName('mecan-reg')
    for (var i = 0; i < selection.length; i++) {
      var nomTall = selection[i].getElementsByClassName('mec-nom')[0].innerHTML
      var nomTalle = selection[i].getElementsByClassName('mec-nom')[1].innerHTML
      selection[i].removeAttribute('style')
      if (nomTall.toLowerCase().indexOf(busqueda) > -1 || nomTalle.toLowerCase().indexOf(busqueda) >-1) {
        selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;')
      } else {
        selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;display:none')
      }
    }
  }
  eliminarMecanico(identidad){
    this.alertCtrl.create({
      title: 'Confirmar eliminación',
      message: '¿Está seguro de eliminar el mecánico?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.http.eliminarMecanico(identidad).subscribe((data) => {
              var resultado = this.validar.mensajes(data.text()).t
              if (resultado == 'Listo') {
                this.getMecanicos()
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
