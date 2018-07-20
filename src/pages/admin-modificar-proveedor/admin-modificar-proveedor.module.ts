import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminModificarProveedorPage } from './admin-modificar-proveedor';

@NgModule({
  declarations: [
    AdminModificarProveedorPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminModificarProveedorPage),
  ],
})
export class AdminModificarProveedorPageModule {}
