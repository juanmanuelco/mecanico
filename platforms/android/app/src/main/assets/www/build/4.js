webpackJsonp([4],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAdminPageModule", function() { return ListaAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_admin__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaAdminPageModule = /** @class */ (function () {
    function ListaAdminPageModule() {
    }
    ListaAdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_admin__["a" /* ListaAdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_admin__["a" /* ListaAdminPage */]),
            ],
        })
    ], ListaAdminPageModule);
    return ListaAdminPageModule;
}());

//# sourceMappingURL=lista-admin.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_registro_taller_admin_registro_taller__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cambiar_usuario_cambiar_usuario__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_registro_mecanico_admin_registro_mecanico__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_mod_eli_taller_admin_mod_eli_taller__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_mod_eli_mecanico_admin_mod_eli_mecanico__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_registro_proveedor_admin_registro_proveedor__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_mod_eli_proveedor_admin_mod_eli_proveedor__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ListaAdminPage = /** @class */ (function () {
    function ListaAdminPage(navCtrl, navParams, salir) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.salir = salir;
        this.cambAdm = __WEBPACK_IMPORTED_MODULE_4__cambiar_usuario_cambiar_usuario__["a" /* CambiarUsuarioPage */];
        this.regTaller = __WEBPACK_IMPORTED_MODULE_3__admin_registro_taller_admin_registro_taller__["a" /* AdminRegistroTallerPage */];
        this.regMecanico = __WEBPACK_IMPORTED_MODULE_5__admin_registro_mecanico_admin_registro_mecanico__["a" /* AdminRegistroMecanicoPage */];
        this.ModEliTaller = __WEBPACK_IMPORTED_MODULE_6__admin_mod_eli_taller_admin_mod_eli_taller__["a" /* AdminModEliTallerPage */];
        this.ModEliMecanico = __WEBPACK_IMPORTED_MODULE_7__admin_mod_eli_mecanico_admin_mod_eli_mecanico__["a" /* AdminModEliMecanicoPage */];
        this.regProveedor = __WEBPACK_IMPORTED_MODULE_8__admin_registro_proveedor_admin_registro_proveedor__["a" /* AdminRegistroProveedorPage */];
        this.ModEliProveedor = __WEBPACK_IMPORTED_MODULE_9__admin_mod_eli_proveedor_admin_mod_eli_proveedor__["a" /* AdminModEliProveedorPage */];
    }
    ListaAdminPage.prototype.logout = function () {
        this.salir.logout();
    };
    ListaAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-admin',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\lista-admin\lista-admin.html"*/'<!--\n\n  Generated template for the ListaAdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Menú</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Administración\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <button ion-button full>Incidencias</button>\n\n      <button ion-button full [navPush]="cambAdm">Cambiar contraseña</button>\n\n      <button ion-button full (click)="logout()">Cerrar sesión</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Registros\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <button ion-button full [navPush]="regProveedor">Proveedor</button>\n\n      <button ion-button full [navPush]="regTaller">Taller mecánico</button>\n\n      <button ion-button full [navPush]="regMecanico">Mecánico</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Modificacion y eliminación\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <button ion-button full [navPush]="ModEliProveedor">Proveedor</button>\n\n      <button ion-button full [navPush]="ModEliTaller">Taller mecánico</button>\n\n      <button ion-button full [navPush]="ModEliMecanico">Mecánico</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n      <ion-card-header>\n\n        Reportes\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <button ion-button full>Ventas</button>\n\n        <button ion-button full>Incidencias</button>\n\n        <button ion-button full>Datos de uso</button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\lista-admin\lista-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */]])
    ], ListaAdminPage);
    return ListaAdminPage;
}());

//# sourceMappingURL=lista-admin.js.map

/***/ })

});
//# sourceMappingURL=4.js.map