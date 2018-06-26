import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-principal-mecanico',
  templateUrl: 'principal-mecanico.html', 
})
export class PrincipalMecanicoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalMecanicoPage');
  }
  menu(){
    const modal = this.modalCtrl.create('ListaMecanicoPage');
    modal.present();
  }

}
