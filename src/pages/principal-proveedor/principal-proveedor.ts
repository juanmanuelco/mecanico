import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CambiarUsuarioPage } from '../cambiar-usuario/cambiar-usuario';
import {ValinternoProvider  } from '../../providers/valinterno/valinterno';

@IonicPage()
@Component({
  selector: 'page-principal-proveedor',
  templateUrl: 'principal-proveedor.html',
})
export class PrincipalProveedorPage {
  cambUs=CambiarUsuarioPage
  constructor(public navCtrl: NavController, public navParams: NavParams, public salir:ValinternoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalProveedorPage');
  }
  logout(){
    this.salir.logout()
  }
  abrir_cambio(){
    this.navCtrl.push(CambiarUsuarioPage)
  }

}
