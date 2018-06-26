//import { ValidacionesComponent } from '../../components/validaciones/validaciones';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-principal-admin',
  templateUrl: 'principal-admin.html',
})
export class PrincipalAdminPage {
  administracion
  reportes
  incidencias
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl:AlertController,
    public modalCtrl: ModalController
  ) {
  }

  menu(){
    const modal = this.modalCtrl.create('ListaAdminPage');
    modal.present();
  }
}
