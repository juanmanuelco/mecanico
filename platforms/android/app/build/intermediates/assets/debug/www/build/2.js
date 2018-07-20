webpackJsonp([2],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaTallerPageModule", function() { return ListaTallerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_taller__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaTallerPageModule = /** @class */ (function () {
    function ListaTallerPageModule() {
    }
    ListaTallerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_taller__["a" /* ListaTallerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_taller__["a" /* ListaTallerPage */]),
            ],
        })
    ], ListaTallerPageModule);
    return ListaTallerPageModule;
}());

//# sourceMappingURL=lista-taller.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaTallerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cambiar_usuario_cambiar_usuario__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taller_registro_mecanico_taller_registro_mecanico__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__taller_mod_eli_mecanico_taller_mod_eli_mecanico__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListaTallerPage = /** @class */ (function () {
    function ListaTallerPage(navCtrl, navParams, salir) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.salir = salir;
        this.cambTaller = __WEBPACK_IMPORTED_MODULE_3__cambiar_usuario_cambiar_usuario__["a" /* CambiarUsuarioPage */];
        this.regMecanico = __WEBPACK_IMPORTED_MODULE_4__taller_registro_mecanico_taller_registro_mecanico__["a" /* TallerRegistroMecanicoPage */];
        this.modEliMecanico = __WEBPACK_IMPORTED_MODULE_5__taller_mod_eli_mecanico_taller_mod_eli_mecanico__["a" /* TallerModEliMecanicoPage */];
    }
    ListaTallerPage.prototype.logout = function () {
        this.salir.logout();
    };
    ListaTallerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-taller',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\lista-taller\lista-taller.html"*/'<!--\n\n  Generated template for the ListaAdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Menú</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Administración\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <button ion-button full>Incidencias</button>\n\n      <button ion-button full [navPush]="cambTaller">Cambiar contraseña</button>\n\n      <button ion-button full (click)="logout()">Cerrar sesión</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Registros\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <button ion-button full [navPush]="regMecanico">Mecánico</button>\n\n      <button ion-button full>Stock de repuestos</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Modificacion y eliminación\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <button ion-button full [navPush]="modEliMecanico">Mecánico</button>\n\n      <button ion-button full>Repuestos</button>\n\n      <button ion-button full>Darse de alta</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n      <ion-card-header>\n\n        Reportes\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <button ion-button full>Incidencias</button>\n\n        <button ion-button full>Repuestos usados</button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\lista-taller\lista-taller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */]])
    ], ListaTallerPage);
    return ListaTallerPage;
}());

//# sourceMappingURL=lista-taller.js.map

/***/ })

});
//# sourceMappingURL=2.js.map