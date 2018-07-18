webpackJsonp([1],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaTallerPageModule", function() { return ListaTallerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_taller__ = __webpack_require__(309);
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

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaTallerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cambiar_usuario_cambiar_usuario__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taller_registro_mecanico_taller_registro_mecanico__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__taller_mod_eli_mecanico_taller_mod_eli_mecanico__ = __webpack_require__(214);
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
            selector: 'page-lista-taller',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v7\mecanico\src\pages\lista-taller\lista-taller.html"*/'<!--\n  Generated template for the ListaAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Menú</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Administración\n    </ion-card-header>\n    <ion-card-content>\n      <button ion-button full>Incidencias</button>\n      <button ion-button full [navPush]="cambTaller">Cambiar contraseña</button>\n      <button ion-button full (click)="logout()">Cerrar sesión</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Registros\n    </ion-card-header>\n    <ion-card-content>\n      <button ion-button full [navPush]="regMecanico">Mecánico</button>\n      <button ion-button full>Stock de repuestos</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Modificacion y eliminación\n    </ion-card-header>\n    <ion-card-content>\n      <button ion-button full [navPush]="modEliMecanico">Mecánico</button>\n      <button ion-button full>Repuestos</button>\n      <button ion-button full>Darse de alta</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n      <ion-card-header>\n        Reportes\n      </ion-card-header>\n      <ion-card-content>\n        <button ion-button full>Incidencias</button>\n        <button ion-button full>Repuestos usados</button>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v7\mecanico\src\pages\lista-taller\lista-taller.html"*/,
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
//# sourceMappingURL=1.js.map