import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalTallerPage } from './principal-taller';

@NgModule({
  declarations: [
    PrincipalTallerPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalTallerPage),
  ],
})
export class PrincipalTallerPageModule {}
