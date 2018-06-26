import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { CambiarUsuarioPage } from '../cambiar-usuario/cambiar-usuario';



@IonicPage()
@Component({
  selector: 'page-lista-mecanico',
  templateUrl: 'lista-mecanico.html',
})
export class ListaMecanicoPage {
  cambMecanico=CambiarUsuarioPage
  constructor(public navCtrl: NavController, public navParams: NavParams, public salir:ValidacionesProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMecanicoPage');
  }
  logout(){
    this.salir.logout()
  }

}
