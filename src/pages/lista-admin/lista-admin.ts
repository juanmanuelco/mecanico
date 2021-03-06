import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { AdminRegistroTallerPage } from '../admin-registro-taller/admin-registro-taller';
import { CambiarUsuarioPage } from '../cambiar-usuario/cambiar-usuario';
import { AdminRegistroMecanicoPage } from '../admin-registro-mecanico/admin-registro-mecanico';
import {AdminModEliTallerPage} from '../admin-mod-eli-taller/admin-mod-eli-taller'
import {AdminModEliMecanicoPage} from '../admin-mod-eli-mecanico/admin-mod-eli-mecanico'

import {AdminRegistroProveedorPage} from '../admin-registro-proveedor/admin-registro-proveedor'
import {AdminModEliProveedorPage} from '../admin-mod-eli-proveedor/admin-mod-eli-proveedor'

@IonicPage()
@Component({
  selector: 'page-lista-admin',
  templateUrl: 'lista-admin.html',
})
export class ListaAdminPage {
  cambAdm=CambiarUsuarioPage
  regTaller=AdminRegistroTallerPage
  regMecanico=AdminRegistroMecanicoPage
  ModEliTaller=AdminModEliTallerPage
  ModEliMecanico = AdminModEliMecanicoPage
  regProveedor= AdminRegistroProveedorPage
  ModEliProveedor = AdminModEliProveedorPage
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public salir:ValidacionesProvider) {
  }

  logout(){
    this.salir.logout()
  }

}
