webpackJsonp([7],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModificarMecanicoPageModule", function() { return AdminModificarMecanicoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_modificar_mecanico__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminModificarMecanicoPageModule = /** @class */ (function () {
    function AdminModificarMecanicoPageModule() {
    }
    AdminModificarMecanicoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_modificar_mecanico__["a" /* AdminModificarMecanicoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_modificar_mecanico__["a" /* AdminModificarMecanicoPage */]),
            ],
        })
    ], AdminModificarMecanicoPageModule);
    return AdminModificarMecanicoPageModule;
}());

//# sourceMappingURL=admin-modificar-mecanico.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModificarMecanicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminModificarMecanicoPage = /** @class */ (function () {
    function AdminModificarMecanicoPage(navCtrl, navParams, validar, http, alertCtrl, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validar = validar;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.http.obtenerTalleres().subscribe(function (data) {
            _this.talleres = data.json();
        }, function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E0').t,
                subTitle: _this.validar.mensajes('E0').d,
                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
            }).present();
        });
        this.reg_status = true;
        this.status = false;
    }
    AdminModificarMecanicoPage.prototype.ionViewDidLoad = function () {
        this.identidad = this.navParams.get('identidad');
        this.txt_mecanico_nombre = this.navParams.get('nombre');
        this.txt_mecanico_mail = this.navParams.get('mail');
        this.select_mecanico_taller = this.navParams.get('taller');
    };
    AdminModificarMecanicoPage.prototype.guardar = function () {
        if (!this.validar.validar_vacios([this.select_mecanico_taller, this.txt_mecanico_nombre, this.txt_mecanico_mail])) {
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
        this.modificarMecanico(this.identidad, this.txt_mecanico_nombre, this.txt_mecanico_mail, this.select_mecanico_taller);
    };
    AdminModificarMecanicoPage.prototype.modificarMecanico = function (identidad, nombre, mail, taller) {
        var _this = this;
        this.reg_status = false;
        this.status = true;
        this.http.modificarMecanico(identidad, nombre, mail, taller).subscribe(function (data) {
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
    AdminModificarMecanicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-modificar-mecanico',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-modificar-mecanico\admin-modificar-mecanico.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{this.txt_mecanico_nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="centrado">\n  <h1>Modificación de mecánico</h1>\n  <ion-item>\n    <ion-label color="primary">Taller mecánico</ion-label>\n    <ion-select [(ngModel)]="select_mecanico_taller">\n      <ion-option  *ngFor="let taller of talleres" [value]="taller.identidad">{{taller.nombre}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Nombre del mecánico</ion-label>\n    <ion-input aria-placeholder="Nombre" type="text" [(ngModel)]="txt_mecanico_nombre"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" floating>Email del mecánico</ion-label>\n    <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_mecanico_mail"></ion-input>\n  </ion-item>\n  <div class="div_margen_bt">\n    <button ion-button full (click)="guardar()" [disabled]="!reg_status">Guardar</button>\n  </div>\n  <ion-spinner name="crescent" *ngIf="status"></ion-spinner>\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-modificar-mecanico\admin-modificar-mecanico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AdminModificarMecanicoPage);
    return AdminModificarMecanicoPage;
}());

//# sourceMappingURL=admin-modificar-mecanico.js.map

/***/ })

});
//# sourceMappingURL=7.js.map