import { CambiarUsuarioPage } from '../cambiar-usuario/cambiar-usuario';
import {ValinternoProvider  } from '../../providers/valinterno/valinterno';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-principal-usuario',
  templateUrl: 'principal-usuario.html',
})
export class PrincipalUsuarioPage {
  cambUs=CambiarUsuarioPage
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public salir:ValinternoProvider
  ) {
  }

  logout(){
    this.salir.logout()
  }
  abrir_cambio(){
    this.navCtrl.push(CambiarUsuarioPage)
  }
}

