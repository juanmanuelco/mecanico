webpackJsonp([3],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAdminPageModule", function() { return ListaAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_admin__ = __webpack_require__(308);
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_registro_taller_admin_registro_taller__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cambiar_usuario_cambiar_usuario__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_registro_mecanico_admin_registro_mecanico__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_mod_eli_taller_admin_mod_eli_taller__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_mod_eli_mecanico_admin_mod_eli_mecanico__ = __webpack_require__(209);
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
    }
    ListaAdminPage.prototype.logout = function () {
        this.salir.logout();
    };
    ListaAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-admin',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v5\mecanico\src\pages\lista-admin\lista-admin.html"*/'<!--\n  Generated template for the ListaAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Menú</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Administración\n    </ion-card-header>\n    <ion-card-content>\n      <button ion-button full>Incidencias</button>\n      <button ion-button full [navPush]="cambAdm">Cambiar contraseña</button>\n      <button ion-button full (click)="logout()">Cerrar sesión</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Registros\n    </ion-card-header>\n    <ion-card-content>\n      <button ion-button full [navPush]="regTaller">Taller mecánico</button>\n      <button ion-button full [navPush]="regMecanico">Mecánico</button>\n      <button ion-button full>Proveedores</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Modificacion y eliminación\n    </ion-card-header>\n    <ion-card-content>\n      <button ion-button full [navPush]="ModEliTaller">Taller mecánico</button>\n      <button ion-button full [navPush]="ModEliMecanico">Mecánico</button>\n      <button ion-button full>Proveedores</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n      <ion-card-header>\n        Reportes\n      </ion-card-header>\n      <ion-card-content>\n        <button ion-button full>Ventas</button>\n        <button ion-button full>Incidencias</button>\n        <button ion-button full>Datos de uso</button>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v5\mecanico\src\pages\lista-admin\lista-admin.html"*/,
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
//# sourceMappingURL=3.js.map