import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalUsuarioPage } from './principal-usuario';

@NgModule({
  declarations: [
    PrincipalUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalUsuarioPage),
  ],
})
export class PrincipalUsuarioPageModule {}
