import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, AlertController } from 'ionic-angular';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-admin-mod-eli-proveedor',
  templateUrl: 'admin-mod-eli-proveedor.html',
})
export class AdminModEliProveedorPage {
  proveedores: any
  parametro = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private validar: ValidacionesProvider,
    private alertCtrl: AlertController,
    private http: HttpProvider,
    public modalCtrl: ModalController
  ) {
    this.getProveedores()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminModEliProveedorPage');
  }
  getProveedores() {
    this.http.obtenerProveedores().subscribe((data) => {
      this.proveedores = data.json()
    }, (error) => {
      this.alertCtrl.create({
        title: this.validar.mensajes('E0').t,
        subTitle: this.validar.mensajes('E0').d,
        buttons: [{ text: 'Aceptar', role: 'cancel', handler: data => { this.navCtrl.popToRoot() } }]
      }).present();
    })
  }
  buscarProveedores(){
    var busqueda = (this.parametro).toLowerCase()
    var selection = document.getElementsByClassName('prov-reg')
    for (var i = 0; i < selection.length; i++) {
      var nomProv = selection[i].getElementsByClassName('prov-nom')[0].innerHTML
      selection[i].removeAttribute('style')
      if (nomProv.toLowerCase().indexOf(busqueda) > -1) {
        selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;')
      } else {
        selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;display:none')
      }
    }
  }
  eliminarProveedor(identidad){
    this.alertCtrl.create({
      title: 'Confirmar eliminación',
      message: 'Está seguro de eliminar al proveedor',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.http.eliminarProveedor(identidad).subscribe((data) => {
              var resultado = this.validar.mensajes(data.text()).t
              if (resultado == 'Listo') {
                this.getProveedores()
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
  modificarProveedor(identidad, nombre, imagen, descripcion, mail, paypal, cuenta){
    var modalModificacion = this.modalCtrl.create('AdminModificarProveedorPage',{
      identidad:identidad,
      nombre: nombre, 
      imagen:imagen,
      descripcion:descripcion,
      mail:mail,
      paypal:paypal,
      cuenta: cuenta
    })
    modalModificacion.present();
  }
}
