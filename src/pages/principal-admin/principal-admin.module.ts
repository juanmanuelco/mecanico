import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalAdminPage } from './principal-admin';

@NgModule({
  declarations: [
    PrincipalAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalAdminPage),
  ],
})
export class PrincipalAdminPageModule {}
