import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { CambiarUsuarioPage } from '../cambiar-usuario/cambiar-usuario';
import {TallerRegistroMecanicoPage} from '../taller-registro-mecanico/taller-registro-mecanico'
import {TallerModEliMecanicoPage} from '../taller-mod-eli-mecanico/taller-mod-eli-mecanico'
@IonicPage()
@Component({
  selector: 'page-lista-taller',
  templateUrl: 'lista-taller.html',
})
export class ListaTallerPage {
  cambTaller=CambiarUsuarioPage
  regMecanico= TallerRegistroMecanicoPage
  modEliMecanico = TallerModEliMecanicoPage
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public salir:ValidacionesProvider 

  ) {
  }

  logout(){
    this.salir.logout()
  }

}
