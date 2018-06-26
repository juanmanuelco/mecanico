import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMecanicoPage } from './lista-mecanico';

@NgModule({
  declarations: [
    ListaMecanicoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMecanicoPage),
  ],
})
export class ListaMecanicoPageModule {}
