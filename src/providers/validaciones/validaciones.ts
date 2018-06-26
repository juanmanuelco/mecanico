
import { Injectable } from '@angular/core';
import { PrincipalAdminPage } from '../../pages/principal-admin/principal-admin';
import { PrincipalMecanicoPage } from '../../pages/principal-mecanico/principal-mecanico';
import { PrincipalTallerPage } from '../../pages/principal-taller/principal-taller';
import { PrincipalUsuarioPage } from '../../pages/principal-usuario/principal-usuario';
import { AlertController, LoadingController} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Injectable()
export class ValidacionesProvider {
  MENSAJES = [
    /*E0*/ { t: 'Error de red', d: 'No se pudo establecer una conexión con el servidor' },
    /*E1*/ { t: 'Hay campos vacios', d: 'La información solicitada es obligatoria' },
    /*E2*/ { t: 'Email inválido', d: 'Por favor asegurese que el mail tenga la forma id@dominio.com' },
    /*E3*/ { t: 'Contraseña inválida', d: 'Por favor asegurese de ingresar una contraseña con un minimo de 8 dígitos' },
    /*E4*/ { t: 'Contraseña no concide', d: 'Asegurese de escribirla correctamente' },
    /*E5*/ { t: 'Error', d: 'Ya existe una cuenta con ese mail' },
    /*E6*/ { t: 'Error', d: 'Existe un problema al obtener su ubicación' },
    /*E7*/ { t: 'Error', d: 'No existe una cuenta con este mail' },
    /*E8*/ { t: 'Error', d: 'Esta cuenta no está confirmada, no puede inicia sesión' },
    /*E9*/ { t: 'Error', d: 'Página no encontrada' },
    /*E10*/{ t: 'Error', d: 'Ha ocurrido un error en el servidor' },
    /*E11*/{ t: 'Error', d: 'Esta cuenta ya esta activa, no es necesario confirmar' },
    /*E12*/{ t:'Error' , d:'No se ha podido obtener la imagen de la galería'}
  ];
  constructor(
    private alertCtrl: AlertController,
    private sqlite: SQLite,
    public loadingCtrl: LoadingController
  ) {
    console.log('Hello ValidacionesProvider Provider');
  }
  rootPage(rol){
    var pagina=null
    if(rol==1)
      pagina=PrincipalAdminPage
    if(rol==2)
      pagina=PrincipalTallerPage
    if(rol==3)
      pagina= PrincipalMecanicoPage
    if(rol==4)
      pagina=PrincipalUsuarioPage
    return pagina
  } 
  Rol(data){
    var res=4
    if (data.esAdministrador)
      res= 1
    if (data.esTaller)
      res= 2
    if (data.esMecanico)
      res= 3
    return res
  }
  validar_vacios(inputs) {
    var contador = 0;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i] != undefined && inputs[i] != "")
        contador++
    }
    return (contador == inputs.length) ? true : false
  }
  validar_correo(mail) {
    return (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))) ? true : false
  }
  mensajes(data) {
    var salida = { t: 'Listo', d: data }

    switch (data) {
      case 'E0': {
        salida = this.MENSAJES[0]
        break;
      }
      case 'E1': {
        salida = this.MENSAJES[1]
        break;
      }
      case 'E2': {
        salida = this.MENSAJES[2]
        break;
      }
      case 'E3': {
        salida = this.MENSAJES[3]
        break;
      }
      case 'E4': {
        salida = this.MENSAJES[4]
        break;
      }
      case 'E5': {
        salida = this.MENSAJES[5]
        break;
      }
      case 'E6': {
        salida = this.MENSAJES[6]
        break;
      }
      case 'E7': {
        salida = this.MENSAJES[7]
        break;
      }
      case 'E8': {
        salida = this.MENSAJES[8]
        break;
      }
      case 'E9': {
        salida = this.MENSAJES[9]
        break;
      }
      case 'E10': {
        salida = this.MENSAJES[10]
        break;
      }
      case 'E11': {
        salida = this.MENSAJES[11]
        break;
      }
      case 'E12': {
        salida = this.MENSAJES[12]
        break;
      }
      default: {

      }
    }
    return salida;
  }
  
  logout(){
    this.sqlite.create({
      name: 'mecanico.db',
      location: 'default'
    }).then((db: SQLiteObject)=>{
      db.executeSql('DELETE FROM usuario',[]).then((res)=>{
        this.loadingCtrl.create({
          content: 'Cerrando sesión...'
        }).present();
        window.location.reload();      
      }).catch((error)=>{
        this.alertCtrl.create({
          title: 'Error',
          subTitle: error,
          buttons: ['Aceptar']
        }).present();
      })
    }).catch((error)=>{
      this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Ha existido un error al cerrar sesión dos',
        buttons: ['Aceptar']
      }).present();
    })
  }

}