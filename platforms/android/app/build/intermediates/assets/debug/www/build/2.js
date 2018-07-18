webpackJsonp([2],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaMecanicoPageModule", function() { return ListaMecanicoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_mecanico__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaMecanicoPageModule = /** @class */ (function () {
    function ListaMecanicoPageModule() {
    }
    ListaMecanicoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_mecanico__["a" /* ListaMecanicoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_mecanico__["a" /* ListaMecanicoPage */]),
            ],
        })
    ], ListaMecanicoPageModule);
    return ListaMecanicoPageModule;
}());

//# sourceMappingURL=lista-mecanico.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaMecanicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cambiar_usuario_cambiar_usuario__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaMecanicoPage = /** @class */ (function () {
    function ListaMecanicoPage(navCtrl, navParams, salir) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.salir = salir;
        this.cambMecanico = __WEBPACK_IMPORTED_MODULE_3__cambiar_usuario_cambiar_usuario__["a" /* CambiarUsuarioPage */];
    }
    ListaMecanicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaMecanicoPage');
    };
    ListaMecanicoPage.prototype.logout = function () {
        this.salir.logout();
    };
    ListaMecanicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-mecanico',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v7\mecanico\src\pages\lista-mecanico\lista-mecanico.html"*/'<!--\n  Generated template for the ListaMecanicoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Menú</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          Administración\n        </ion-card-header>\n        <ion-card-content>\n          <button ion-button full>Solicitudes nuevas</button>\n          <button ion-button full>Solicitudes atendidas</button>\n          <button ion-button full [navPush]="cambMecanico">Cambiar contraseña</button>\n          <button ion-button full (click)="logout()">Cerrar sesión</button>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v7\mecanico\src\pages\lista-mecanico\lista-mecanico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */]])
    ], ListaMecanicoPage);
    return ListaMecanicoPage;
}());

//# sourceMappingURL=lista-mecanico.js.map

/***/ })

});
//# sourceMappingURL=2.js.map