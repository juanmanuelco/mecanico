import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-principal-taller',
  templateUrl: 'principal-taller.html',
})
export class PrincipalTallerPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    
  }
  menu(){
    const modal = this.modalCtrl.create('ListaTallerPage');
    modal.present();
  }

}
