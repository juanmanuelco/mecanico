import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaTallerPage } from './lista-taller';

@NgModule({
  declarations: [
    ListaTallerPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaTallerPage),
  ],
})
export class ListaTallerPageModule {}
