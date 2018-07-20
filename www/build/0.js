webpackJsonp([0],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TallerModificarMecanicoPageModule", function() { return TallerModificarMecanicoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taller_modificar_mecanico__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TallerModificarMecanicoPageModule = /** @class */ (function () {
    function TallerModificarMecanicoPageModule() {
    }
    TallerModificarMecanicoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__taller_modificar_mecanico__["a" /* TallerModificarMecanicoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__taller_modificar_mecanico__["a" /* TallerModificarMecanicoPage */]),
            ],
        })
    ], TallerModificarMecanicoPageModule);
    return TallerModificarMecanicoPageModule;
}());

//# sourceMappingURL=taller-modificar-mecanico.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TallerModificarMecanicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TallerModificarMecanicoPage = /** @class */ (function () {
    function TallerModificarMecanicoPage(navCtrl, navParams, alertCtrl, http, validar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.validar = validar;
        this.reg_status = true;
        this.status = false;
    }
    TallerModificarMecanicoPage.prototype.ionViewDidLoad = function () {
        this.identidad = this.navParams.get('identidad');
        this.txt_mecanico_nombre = this.navParams.get('nombre');
        this.txt_mecanico_mail = this.navParams.get('mail');
    };
    TallerModificarMecanicoPage.prototype.guardar = function () {
        if (!this.validar.validar_vacios([this.txt_mecanico_nombre, this.txt_mecanico_mail])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (this.validar.validar_correo(this.txt_mecanico_mail)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.modificarMecanico(this.identidad, this.txt_mecanico_nombre, this.txt_mecanico_mail);
    };
    TallerModificarMecanicoPage.prototype.modificarMecanico = function (identidad, nombre, mail) {
        var _this = this;
        this.reg_status = false;
        this.status = true;
        this.http.modificarMecanicoTaller(identidad, nombre, mail).subscribe(function (data) {
            var resultado = _this.validar.mensajes(data.text()).t;
            if (resultado == 'Listo') {
                _this.alertCtrl.create({
                    title: 'Mecánico actualizado',
                    subTitle: 'Cambios guardados con exito',
                    buttons: [{
                            text: 'Aceptar',
                            role: 'cancel',
                            handler: function (data) { _this.navCtrl.popToRoot(); }
                        }]
                }).present();
            }
            else {
                _this.alertCtrl.create({
                    title: "Error",
                    subTitle: "Error al enviar los datos",
                    buttons: ['Aceptar']
                }).present();
            }
            _this.reg_status = true;
            _this.status = false;
        }, function (error) {
            _this.alertCtrl.create({
                title: 'Error',
                subTitle: error.text(),
                buttons: ['Aceptar']
            }).present();
            _this.reg_status = true;
            _this.status = false;
        });
    };
    TallerModificarMecanicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-taller-modificar-mecanico',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\taller-modificar-mecanico\taller-modificar-mecanico.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{this.txt_mecanico_nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="centrado">\n  <h1>Modificación de mecánico</h1>\n  <ion-item>\n    <ion-label color="primary" floating>Nombre del mecánico</ion-label>\n    <ion-input aria-placeholder="Nombre" type="text" [(ngModel)]="txt_mecanico_nombre"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Email del mecánico</ion-label>\n    <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_mecanico_mail"></ion-input>\n  </ion-item>\n  <div class="div_margen_bt">\n    <button ion-button full (click)="guardar()" [disabled]="!reg_status">Guardar</button>\n  </div>\n  <ion-spinner name="crescent" *ngIf="status"></ion-spinner>\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\taller-modificar-mecanico\taller-modificar-mecanico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */]])
    ], TallerModificarMecanicoPage);
    return TallerModificarMecanicoPage;
}());

//# sourceMappingURL=taller-modificar-mecanico.js.map

/***/ })

});
//# sourceMappingURL=0.js.map