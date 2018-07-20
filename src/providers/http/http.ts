import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpProvider {

  url = 'https://mecanico.herokuapp.com'
  //url = 'http://192.168.1.9:3000'
  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }
  logear_http(usuario, password) {
    var cuerpo = { username: usuario, password: password }
    return this.http.post(`${this.url}/usuario/login`, cuerpo)
  }

  registrar_http(nombre, mail, pass, rpass, lat, long) {
    var cuerpo = { nombre: nombre, username: mail, password: pass, rpassword: rpass, latitud: lat, longitud: long }
    return this.http.post(`${this.url}/usuario/registro`, cuerpo)
  }

  recuperar_http(mail) {
    var cuerpo = { username: mail }
    return this.http.post(`${this.url}/usuario/olvido`, cuerpo)
  }

  confirmar_http(mail) {
    var cuerpo = { username: mail }
    return this.http.post(`${this.url}/usuario/reconfirmar`, cuerpo)
  }

  cambiarPassword(mail, identidad, token, pass, npass) {
    var cuerpo = { username: mail, password: pass, npassword: npass }
    return this.http.post(`${this.url}/usuario/cambiopass:${identidad}-${token}`, cuerpo)
  }
  registrarTaller(postData) {
    return this.http.post(`${this.url}/admin/registro-taller`, postData)
  }
  modificarTaller(postData){
    return this.http.post(`${this.url}/admin/actualizar-taller`, postData)
  }
  modificarProveedor(postData){
    return this.http.post(`${this.url}/admin/actualizar-proveedor`, postData)
  }

  registrarProveedor(postData){
    return this.http.post(`${this.url}/admin/registro-proveedor`, postData)
  }

  obtenerTalleres() {
    return this.http.get(`${this.url}/admin/todos-talleres`)
  }
  obtenerMecanicos() {
    return this.http.get(`${this.url}/admin/todos-mecanicos`)
  }
  obtenerProveedores(){
    return this.http.get(`${this.url}/admin/todos-proveedores`)
  }
  
  obtenerMecanicosTaller(identidad) {
    var cuerpo = { identidad: identidad }
    return this.http.post(`${this.url}/admin/todos-mecanicos-id`, cuerpo)
  }
  registrarMecanico(nombre, taller, mail, pass, latitud, longitud) {
    var cuerpo = { nombre: nombre, taller: taller, username: mail, password: pass, ubicacion: [latitud, longitud] }
    return this.http.post(`${this.url}/admin/registro-mecanico`, cuerpo)
  }
  modificarMecanico(identidad, nombre, mail, taller){
    var cuerpo={identidad:identidad, nombre: nombre, username: mail, taller: taller}
    return this.http.post(`${this.url}/admin/actualizar-mecanico`, cuerpo)
  }
  modificarMecanicoTaller(identidad, nombre, mail){
    var cuerpo={identidad:identidad, nombre: nombre, username: mail}
    return this.http.post(`${this.url}/admin/actualizar-mecanico-taller`, cuerpo)
  }
  eliminarTaller(identidad) {
    var cuerpo = { identidad: identidad }
    return this.http.post(`${this.url}/admin/eliminar-taller`, cuerpo)
  }
  eliminarMecanico(identidad) {
    var cuerpo = { identidad: identidad }
    return this.http.post(`${this.url}/admin/eliminar-mecanico`, cuerpo)
  }
  eliminarProveedor(identidad){
    var cuerpo = { identidad: identidad }
    return this.http.post(`${this.url}/admin/eliminar-proveedor`, cuerpo)
  }

}
