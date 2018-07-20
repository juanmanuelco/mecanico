import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Geolocation} from '@ionic-native/geolocation'
import {SQLite} from '@ionic-native/sqlite'
import {ImagePicker} from '@ionic-native/image-picker'

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import {AdminModEliMecanicoPage} from '../pages/admin-mod-eli-mecanico/admin-mod-eli-mecanico'
import {AdminModEliTallerPage} from '../pages/admin-mod-eli-taller/admin-mod-eli-taller'
import {AdminRegistroMecanicoPage} from '../pages/admin-registro-mecanico/admin-registro-mecanico'
import {AdminRegistroTallerPage} from '../pages/admin-registro-taller/admin-registro-taller'
import {CambiarUsuarioPage} from '../pages/cambiar-usuario/cambiar-usuario'
import {ConfirmarPage} from '../pages/confirmar/confirmar'
import {OlvidoPage} from '../pages/olvido/olvido'
import {PrincipalAdminPage} from '../pages/principal-admin/principal-admin'
import {PrincipalMecanicoPage} from '../pages/principal-mecanico/principal-mecanico'
import {PrincipalTallerPage} from '../pages/principal-taller/principal-taller'
import {PrincipalUsuarioPage} from '../pages/principal-usuario/principal-usuario'
import {RegistroPage} from '../pages/registro/registro'
import {TallerModEliMecanicoPage} from '../pages/taller-mod-eli-mecanico/taller-mod-eli-mecanico'
import {TallerRegistroMecanicoPage} from '../pages/taller-registro-mecanico/taller-registro-mecanico'

import {AdminRegistroProveedorPage} from '../pages/admin-registro-proveedor/admin-registro-proveedor'
import{AdminModEliProveedorPage} from '../pages/admin-mod-eli-proveedor/admin-mod-eli-proveedor'
import {PrincipalProveedorPage} from '../pages/principal-proveedor/principal-proveedor'

import { HttpProvider } from '../providers/http/http';
import { ValidacionesProvider } from '../providers/validaciones/validaciones';
import { ValinternoProvider } from '../providers/valinterno/valinterno';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminModEliMecanicoPage,
    AdminModEliTallerPage,
    AdminRegistroMecanicoPage,
    AdminRegistroTallerPage,
    CambiarUsuarioPage,
    ConfirmarPage,
    OlvidoPage,
    PrincipalAdminPage,
    PrincipalMecanicoPage,
    PrincipalTallerPage,
    PrincipalUsuarioPage,
    RegistroPage,
    TallerModEliMecanicoPage,
    TallerRegistroMecanicoPage,
    AdminRegistroProveedorPage,
    AdminModEliProveedorPage,
    PrincipalProveedorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminModEliMecanicoPage,
    AdminModEliTallerPage,
    AdminRegistroMecanicoPage,
    AdminRegistroTallerPage,
    CambiarUsuarioPage,
    ConfirmarPage,
    OlvidoPage,
    PrincipalAdminPage,
    PrincipalMecanicoPage,
    PrincipalTallerPage,
    PrincipalUsuarioPage,
    RegistroPage,
    TallerModEliMecanicoPage,
    TallerRegistroMecanicoPage,
    AdminRegistroProveedorPage,
    AdminModEliProveedorPage,
    PrincipalProveedorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,Geolocation, SQLite,HttpModule,ImagePicker,
    ValidacionesProvider,
    ValinternoProvider
  ]
})
export class AppModule {}
