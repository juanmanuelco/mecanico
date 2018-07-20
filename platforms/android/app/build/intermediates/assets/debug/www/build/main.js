webpackJsonp([25],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalProveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cambiar_usuario_cambiar_usuario__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_valinterno_valinterno__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrincipalProveedorPage = /** @class */ (function () {
    function PrincipalProveedorPage(navCtrl, navParams, salir) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.salir = salir;
        this.cambUs = __WEBPACK_IMPORTED_MODULE_2__cambiar_usuario_cambiar_usuario__["a" /* CambiarUsuarioPage */];
    }
    PrincipalProveedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalProveedorPage');
    };
    PrincipalProveedorPage.prototype.logout = function () {
        this.salir.logout();
    };
    PrincipalProveedorPage.prototype.abrir_cambio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cambiar_usuario_cambiar_usuario__["a" /* CambiarUsuarioPage */]);
    };
    PrincipalProveedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal-proveedor',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-proveedor\principal-proveedor.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>Principal proveedor</ion-title>\n      <ion-buttons end>\n        \n        <button ion-button icon-only color="royal" (click)="logout()">\n          <ion-icon name="exit"></ion-icon>\n        </button>\n        <button ion-button icon-only color="royal" (click)="abrir_cambio()">\n            <ion-icon ios="ios-construct"  md="md-construct"></ion-icon>\n          </button>\n  \n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content></ion-content>\n  \n  <ion-footer>\n  \n  </ion-footer>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-proveedor\principal-proveedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_valinterno_valinterno__["a" /* ValinternoProvider */]])
    ], PrincipalProveedorPage);
    return PrincipalProveedorPage;
}());

//# sourceMappingURL=principal-proveedor.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmarPage = /** @class */ (function () {
    function ConfirmarPage(navCtrl, navParams, alertCtrl, validar, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.validar = validar;
        this.http = http;
        this.reg_status = true;
        this.status = false;
    }
    ConfirmarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmarPage');
    };
    ConfirmarPage.prototype.Reconfirmar = function () {
        var _this = this;
        if (!this.validar.validar_vacios([this.txt_mail_confirmar])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (this.validar.validar_correo(this.txt_mail_confirmar)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.reg_status = false;
        this.status = true;
        this.http.confirmar_http(this.txt_mail_confirmar).subscribe(function (data) {
            var resultado = _this.validar.mensajes(data.text()).t;
            if (resultado == 'Listo') {
                _this.alertCtrl.create({
                    title: 'Listo',
                    subTitle: 'Revise su email para confirmar su cuenta',
                    buttons: [{
                            text: 'Aceptar',
                            role: 'cancel',
                            handler: function (data) {
                                _this.navCtrl.popToRoot();
                            }
                        }]
                }).present();
                _this.reg_status = true;
                _this.status = false;
            }
            else {
                _this.alertCtrl.create({
                    title: _this.validar.mensajes(data.text()).t,
                    subTitle: _this.validar.mensajes(data.text()).d,
                    buttons: ['Aceptar']
                }).present();
                _this.reg_status = true;
                _this.status = false;
            }
        }, function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E0').t,
                subTitle: _this.validar.mensajes('E0').t,
                buttons: ['Aceptar']
            }).present();
            _this.reg_status = true;
            _this.status = false;
        });
    };
    ConfirmarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmar',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\confirmar\confirmar.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar >\n\n    <ion-title>Confirmar mi cuenta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding class="backgranund_">\n\n  <div class="centrado">\n\n      <ion-img class="logo_home" height="130px" width="100px" src="assets/imgs/logotipo.png" style="width: 90px; height: 60px;"></ion-img>\n\n      <h1 class="titulo_principal">Ingrese su email</h1>\n\n      <ion-img class="logo_home" height="90px" width="90px" src="assets/imgs/check.png"></ion-img>\n\n      <p class="titulo_secundario">INGRESA TU E-MAIL:</p>\n\n      <ion-item class="txt_mail_confirmar">\n\n        <ion-label color="primary" floating>Email</ion-label>\n\n        <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_mail_confirmar"></ion-input>\n\n      </ion-item>\n\n      <div class="div_margen_bt">\n\n        <button class="btn_confirmar_cuenta" ion-button full (click)="Reconfirmar()" [disabled]="!reg_status" >Confirmar</button>\n\n        <ion-spinner name="crescent" *ngIf="status" ></ion-spinner>\n\n      </div>\n\n  </div>\n\n  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\confirmar\confirmar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]])
    ], ConfirmarPage);
    return ConfirmarPage;
}());

//# sourceMappingURL=confirmar.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlvidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OlvidoPage = /** @class */ (function () {
    function OlvidoPage(navCtrl, navParams, alertCtrl, validar, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.validar = validar;
        this.http = http;
        this.reg_status = true;
        this.status = false;
    }
    OlvidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OlvidoPage');
    };
    OlvidoPage.prototype.Recuperar = function () {
        var _this = this;
        if (!this.validar.validar_vacios([this.txt_mail_olvido])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (this.validar.validar_correo(this.txt_mail_olvido)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.reg_status = false;
        this.status = true;
        this.http.recuperar_http(this.txt_mail_olvido).subscribe(function (data) {
            var resultado = _this.validar.mensajes(data.text()).t;
            if (resultado == 'Listo') {
                _this.alertCtrl.create({
                    title: 'Listo',
                    subTitle: 'Revise su email para recuperar su cuenta',
                    buttons: [{
                            text: 'Aceptar',
                            role: 'cancel',
                            handler: function (data) {
                                _this.navCtrl.popToRoot();
                            }
                        }]
                }).present();
                _this.reg_status = true;
                _this.status = false;
            }
            else {
                _this.alertCtrl.create({
                    title: _this.validar.mensajes(data.text()).t,
                    subTitle: _this.validar.mensajes(data.text()).d,
                    buttons: ['Aceptar']
                }).present();
                _this.reg_status = true;
                _this.status = false;
            }
        }, function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E0').t,
                subTitle: _this.validar.mensajes('E0').t,
                buttons: ['Aceptar']
            }).present();
            _this.reg_status = true;
            _this.status = false;
        });
    };
    OlvidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-olvido',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\olvido\olvido.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar >\n\n    <ion-title>¿Olvidó su contraseña?</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding class="backgranund_">\n\n  <div class="centrado">\n\n      <ion-img class="logo_home" height="130px" width="100px" src="assets/imgs/logotipo.png" style="width: 90px; height: 60px;"></ion-img>\n\n      <h1 class="titulo_principal">Ingrese su email</h1>\n\n      <ion-img class="logo_home" height="90px" width="90px" src="assets/imgs/check.png"></ion-img>\n\n      <p class="titulo_secundario">TE ENVIAREMOS UN CORREO DE RECUPERACIÓN:</p>\n\n      <ion-item class="txt_mail_olvido">\n\n        <ion-label color="primary" floating>Email</ion-label>\n\n        <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_mail_olvido"></ion-input>\n\n      </ion-item>\n\n      <div class="div_margen_bt">\n\n        <button class="btn_olvidar_password" ion-button full (click)="Recuperar()" [disabled]="!reg_status" >Enviar</button>\n\n        <ion-spinner name="crescent" *ngIf="status" ></ion-spinner>\n\n      </div>\n\n  </div>\n\n  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\olvido\olvido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */]])
    ], OlvidoPage);
    return OlvidoPage;
}());

//# sourceMappingURL=olvido.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
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
//Angular

//Ionic

//Providers



var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, validar, http, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validar = validar;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.reg_status = true;
        this.status = false;
    }
    RegistroPage.prototype.Registrar = function () {
        var nombre = this.txt_nombre_registro;
        var mail = this.txt_mail_registro;
        var pass = this.txt_password_registro;
        var rpass = this.txt_rpassword_registro;
        if (!this.validar.validar_vacios([nombre, mail, pass, rpass])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (this.validar.validar_correo(mail)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass.length < 8 || rpass.length < 8) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E3').t,
                subTitle: this.validar.mensajes('E3').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass != rpass) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E4').t,
                subTitle: this.validar.mensajes('E4').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.completarRegistro(nombre, mail, pass, rpass);
    };
    RegistroPage.prototype.completarRegistro = function (nombre, mail, pass, rpass) {
        var _this = this;
        var latitud, longitud;
        this.reg_status = false;
        this.status = true;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp_geo) {
            latitud = resp_geo.coords.latitude;
            longitud = resp_geo.coords.longitude;
            _this.http.registrar_http(nombre, mail, pass, rpass, latitud, longitud)
                .subscribe(function (data) {
                var resultado = _this.validar.mensajes(data.text()).t;
                if (resultado == 'Listo') {
                    _this.alertCtrl.create({
                        title: 'Cuenta registrada con éxito',
                        subTitle: 'Ahora revise su email para confirmar su cuenta',
                        buttons: [{
                                text: 'Aceptar',
                                role: 'cancel',
                                handler: function (data) {
                                    _this.navCtrl.popToRoot();
                                }
                            }]
                    }).present();
                }
                else {
                    _this.alertCtrl.create({
                        title: _this.validar.mensajes(data.text()).t,
                        subTitle: _this.validar.mensajes(data.text()).d,
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
        }, function (error_geo) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E6').d,
                subTitle: _this.validar.mensajes('E6').d,
                buttons: ['Aceptar']
            }).present();
            _this.reg_status = true;
            _this.status = false;
        });
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\registro\registro.html"*/'<!--\n\n  Generated template for the RegistroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>REGISTRO</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="backgranund_">\n\n  <div class="centrado">\n\n    <h1 class="centrado titulo_principal">Registrate</h1>\n\n    <ion-img height="100px" class="logo_registro" width="100px" src="assets/imgs/logotipo.png"></ion-img>\n\n    <div class="margen-central">\n\n      <ion-item class="txt">\n\n        <ion-label color="primary" floating>Nombre completo</ion-label>\n\n        <ion-input aria-placeholder="Nombre" [(ngModel)]="txt_nombre_registro"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="txt">\n\n        <ion-label color="primary" floating>Email</ion-label>\n\n        <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_mail_registro"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="txt">\n\n        <ion-label color="primary" floating>Contraseña</ion-label>\n\n        <ion-input aria-placeholder="Contraseña" type="password" [(ngModel)]="txt_password_registro"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="txt_final">\n\n          <ion-label color="primary" floating>Confirmar contraseña</ion-label>\n\n          <ion-input aria-placeholder="Contraseña" type="password" [(ngModel)]="txt_rpassword_registro"></ion-input>\n\n      </ion-item>\n\n      <div class="div_margen_bt">\n\n          <button ion-button full class="btn_registrar_cuenta" (click)="Registrar()" [disabled]="!reg_status">Registrar</button>\n\n        </div>\n\n        <ion-spinner name="crescent" *ngIf="status" ></ion-spinner>\n\n    </div>\n\n  </div> \n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpProvider = /** @class */ (function () {
    //url = 'http://192.168.1.9:3000'
    function HttpProvider(http) {
        this.http = http;
        this.url = 'https://mecanico.herokuapp.com';
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.logear_http = function (usuario, password) {
        var cuerpo = { username: usuario, password: password };
        return this.http.post(this.url + "/usuario/login", cuerpo);
    };
    HttpProvider.prototype.registrar_http = function (nombre, mail, pass, rpass, lat, long) {
        var cuerpo = { nombre: nombre, username: mail, password: pass, rpassword: rpass, latitud: lat, longitud: long };
        return this.http.post(this.url + "/usuario/registro", cuerpo);
    };
    HttpProvider.prototype.recuperar_http = function (mail) {
        var cuerpo = { username: mail };
        return this.http.post(this.url + "/usuario/olvido", cuerpo);
    };
    HttpProvider.prototype.confirmar_http = function (mail) {
        var cuerpo = { username: mail };
        return this.http.post(this.url + "/usuario/reconfirmar", cuerpo);
    };
    HttpProvider.prototype.cambiarPassword = function (mail, identidad, token, pass, npass) {
        var cuerpo = { username: mail, password: pass, npassword: npass };
        return this.http.post(this.url + "/usuario/cambiopass:" + identidad + "-" + token, cuerpo);
    };
    HttpProvider.prototype.registrarTaller = function (postData) {
        return this.http.post(this.url + "/admin/registro-taller", postData);
    };
    HttpProvider.prototype.modificarTaller = function (postData) {
        return this.http.post(this.url + "/admin/actualizar-taller", postData);
    };
    HttpProvider.prototype.modificarProveedor = function (postData) {
        return this.http.post(this.url + "/admin/actualizar-proveedor", postData);
    };
    HttpProvider.prototype.registrarProveedor = function (postData) {
        return this.http.post(this.url + "/admin/registro-proveedor", postData);
    };
    HttpProvider.prototype.obtenerTalleres = function () {
        return this.http.get(this.url + "/admin/todos-talleres");
    };
    HttpProvider.prototype.obtenerMecanicos = function () {
        return this.http.get(this.url + "/admin/todos-mecanicos");
    };
    HttpProvider.prototype.obtenerProveedores = function () {
        return this.http.get(this.url + "/admin/todos-proveedores");
    };
    HttpProvider.prototype.obtenerMecanicosTaller = function (identidad) {
        var cuerpo = { identidad: identidad };
        return this.http.post(this.url + "/admin/todos-mecanicos-id", cuerpo);
    };
    HttpProvider.prototype.registrarMecanico = function (nombre, taller, mail, pass, latitud, longitud) {
        var cuerpo = { nombre: nombre, taller: taller, username: mail, password: pass, ubicacion: [latitud, longitud] };
        return this.http.post(this.url + "/admin/registro-mecanico", cuerpo);
    };
    HttpProvider.prototype.modificarMecanico = function (identidad, nombre, mail, taller) {
        var cuerpo = { identidad: identidad, nombre: nombre, username: mail, taller: taller };
        return this.http.post(this.url + "/admin/actualizar-mecanico", cuerpo);
    };
    HttpProvider.prototype.modificarMecanicoTaller = function (identidad, nombre, mail) {
        var cuerpo = { identidad: identidad, nombre: nombre, username: mail };
        return this.http.post(this.url + "/admin/actualizar-mecanico-taller", cuerpo);
    };
    HttpProvider.prototype.eliminarTaller = function (identidad) {
        var cuerpo = { identidad: identidad };
        return this.http.post(this.url + "/admin/eliminar-taller", cuerpo);
    };
    HttpProvider.prototype.eliminarMecanico = function (identidad) {
        var cuerpo = { identidad: identidad };
        return this.http.post(this.url + "/admin/eliminar-mecanico", cuerpo);
    };
    HttpProvider.prototype.eliminarProveedor = function (identidad) {
        var cuerpo = { identidad: identidad };
        return this.http.post(this.url + "/admin/eliminar-proveedor", cuerpo);
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidacionesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_principal_admin_principal_admin__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_principal_mecanico_principal_mecanico__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_principal_taller_principal_taller__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_principal_usuario_principal_usuario__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_principal_proveedor_principal_proveedor__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ValidacionesProvider = /** @class */ (function () {
    function ValidacionesProvider(alertCtrl, sqlite, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.sqlite = sqlite;
        this.loadingCtrl = loadingCtrl;
        this.MENSAJES = [
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
            /*E10*/ { t: 'Error', d: 'Ha ocurrido un error en el servidor' },
            /*E11*/ { t: 'Error', d: 'Esta cuenta ya esta activa, no es necesario confirmar' },
            /*E12*/ { t: 'Error', d: 'No se ha podido obtener la imagen de la galería' }
        ];
        console.log('Hello ValidacionesProvider Provider');
    }
    ValidacionesProvider.prototype.rootPage = function (rol) {
        var pagina = null;
        if (rol == 1)
            pagina = __WEBPACK_IMPORTED_MODULE_1__pages_principal_admin_principal_admin__["a" /* PrincipalAdminPage */];
        if (rol == 2)
            pagina = __WEBPACK_IMPORTED_MODULE_3__pages_principal_taller_principal_taller__["a" /* PrincipalTallerPage */];
        if (rol == 3)
            pagina = __WEBPACK_IMPORTED_MODULE_2__pages_principal_mecanico_principal_mecanico__["a" /* PrincipalMecanicoPage */];
        if (rol == 4)
            pagina = __WEBPACK_IMPORTED_MODULE_5__pages_principal_proveedor_principal_proveedor__["a" /* PrincipalProveedorPage */];
        if (rol == 5)
            pagina = __WEBPACK_IMPORTED_MODULE_4__pages_principal_usuario_principal_usuario__["a" /* PrincipalUsuarioPage */];
        return pagina;
    };
    ValidacionesProvider.prototype.Rol = function (data) {
        var res = 5;
        if (data.esAdministrador)
            res = 1;
        if (data.esTaller)
            res = 2;
        if (data.esMecanico)
            res = 3;
        if (data.esProveedor)
            res = 4;
        return res;
    };
    ValidacionesProvider.prototype.validar_vacios = function (inputs) {
        var contador = 0;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i] != undefined && inputs[i] != "")
                contador++;
        }
        return (contador == inputs.length) ? true : false;
    };
    ValidacionesProvider.prototype.validar_correo = function (mail) {
        return (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))) ? true : false;
    };
    ValidacionesProvider.prototype.mensajes = function (data) {
        var salida = { t: 'Listo', d: data };
        switch (data) {
            case 'E0': {
                salida = this.MENSAJES[0];
                break;
            }
            case 'E1': {
                salida = this.MENSAJES[1];
                break;
            }
            case 'E2': {
                salida = this.MENSAJES[2];
                break;
            }
            case 'E3': {
                salida = this.MENSAJES[3];
                break;
            }
            case 'E4': {
                salida = this.MENSAJES[4];
                break;
            }
            case 'E5': {
                salida = this.MENSAJES[5];
                break;
            }
            case 'E6': {
                salida = this.MENSAJES[6];
                break;
            }
            case 'E7': {
                salida = this.MENSAJES[7];
                break;
            }
            case 'E8': {
                salida = this.MENSAJES[8];
                break;
            }
            case 'E9': {
                salida = this.MENSAJES[9];
                break;
            }
            case 'E10': {
                salida = this.MENSAJES[10];
                break;
            }
            case 'E11': {
                salida = this.MENSAJES[11];
                break;
            }
            case 'E12': {
                salida = this.MENSAJES[12];
                break;
            }
            default: {
            }
        }
        return salida;
    };
    ValidacionesProvider.prototype.logout = function () {
        var _this = this;
        this.sqlite.create({
            name: 'mecanico.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM usuario', []).then(function (res) {
                _this.loadingCtrl.create({
                    content: 'Cerrando sesión...'
                }).present();
                window.location.reload();
            }).catch(function (error) {
                _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: error,
                    buttons: ['Aceptar']
                }).present();
            });
        }).catch(function (error) {
            _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Ha existido un error al cerrar sesión dos',
                buttons: ['Aceptar']
            }).present();
        });
    };
    ValidacionesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* LoadingController */]])
    ], ValidacionesProvider);
    return ValidacionesProvider;
}());

//# sourceMappingURL=validaciones.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-mod-eli-mecanico/admin-mod-eli-mecanico.module": [
		292,
		24
	],
	"../pages/admin-mod-eli-proveedor/admin-mod-eli-proveedor.module": [
		293,
		23
	],
	"../pages/admin-mod-eli-taller/admin-mod-eli-taller.module": [
		296,
		22
	],
	"../pages/admin-modificar-mecanico/admin-modificar-mecanico.module": [
		294,
		7
	],
	"../pages/admin-modificar-proveedor/admin-modificar-proveedor.module": [
		295,
		6
	],
	"../pages/admin-modificar-taller/admin-modificar-taller.module": [
		297,
		5
	],
	"../pages/admin-registro-mecanico/admin-registro-mecanico.module": [
		298,
		21
	],
	"../pages/admin-registro-proveedor/admin-registro-proveedor.module": [
		299,
		20
	],
	"../pages/admin-registro-taller/admin-registro-taller.module": [
		306,
		19
	],
	"../pages/cambiar-usuario/cambiar-usuario.module": [
		300,
		18
	],
	"../pages/confirmar/confirmar.module": [
		301,
		17
	],
	"../pages/lista-admin/lista-admin.module": [
		302,
		4
	],
	"../pages/lista-mecanico/lista-mecanico.module": [
		303,
		3
	],
	"../pages/lista-taller/lista-taller.module": [
		304,
		2
	],
	"../pages/mapa-obtener/mapa-obtener.module": [
		305,
		1
	],
	"../pages/olvido/olvido.module": [
		307,
		16
	],
	"../pages/principal-admin/principal-admin.module": [
		308,
		15
	],
	"../pages/principal-mecanico/principal-mecanico.module": [
		309,
		14
	],
	"../pages/principal-proveedor/principal-proveedor.module": [
		310,
		13
	],
	"../pages/principal-taller/principal-taller.module": [
		311,
		12
	],
	"../pages/principal-usuario/principal-usuario.module": [
		312,
		11
	],
	"../pages/registro/registro.module": [
		314,
		10
	],
	"../pages/taller-mod-eli-mecanico/taller-mod-eli-mecanico.module": [
		313,
		9
	],
	"../pages/taller-modificar-mecanico/taller-modificar-mecanico.module": [
		315,
		0
	],
	"../pages/taller-registro-mecanico/taller-registro-mecanico.module": [
		316,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirmar_confirmar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__olvido_olvido__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, http, validar, sqlite) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.validar = validar;
        this.sqlite = sqlite;
        this.regP = __WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */];
        this.olvP = __WEBPACK_IMPORTED_MODULE_1__olvido_olvido__["a" /* OlvidoPage */];
        this.confP = __WEBPACK_IMPORTED_MODULE_0__confirmar_confirmar__["a" /* ConfirmarPage */];
        this.reg_status = true;
        this.status = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.cargarDB();
    };
    HomePage.prototype.cargarDB = function () {
        var _this = this;
        this.sqlite.create({
            name: 'mecanico.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("CREATE TABLE IF NOT EXISTS usuario(\n        \"identidad\" INTEGER PRIMARY KEY, \n        \"nombre\" TEXT, \n        \"username\" TEXT, \n        \"rol\" INTEGER, \n        \"token\" TEXT,\n        \"longitud\" REAL,\n        \"latitud\" REAL\n      )", []).then(function (res) { }).catch(function (e) { });
            db.executeSql("SELECT * FROM usuario", []).then(function (usuario) {
                try {
                    _this.navCtrl.setRoot(_this.validar.rootPage(Number(usuario.rows.item(0).rol)));
                    _this.navCtrl.popToRoot();
                }
                catch (error) { }
            }).catch(function (error) { });
        }).catch(function (e) { });
    };
    HomePage.prototype.logear = function () {
        //Si no se ingresa nada
        var usuario = this.txt_mail_login;
        var pass = this.txt_password_login;
        if (!this.validar.validar_vacios([usuario, pass])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        //Si la contraseña es menor que 8 dígitos
        if (pass.length < 8) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E3').t,
                subTitle: this.validar.mensajes('E3').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (this.validar.validar_correo(usuario)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.iniciarSesion(usuario, pass);
    };
    HomePage.prototype.iniciarSesion = function (user, pass) {
        var _this = this;
        this.reg_status = false;
        this.status = true;
        this.http.logear_http(user, pass)
            .subscribe(function (data) {
            var resultado = _this.validar.mensajes(data.text()).t;
            if (resultado == 'Listo') {
                _this.guardarSesion(data.text());
            }
            else {
                _this.alertCtrl.create({
                    title: _this.validar.mensajes(data.text()).t,
                    subTitle: _this.validar.mensajes(data.text()).d,
                    buttons: ['Aceptar']
                }).present();
            }
            _this.reg_status = true;
            _this.status = false;
        }, function (error) {
            //Ocurrió un error en el servidor
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E0').t,
                subTitle: _this.validar.mensajes('E0').d,
                buttons: ['Aceptar']
            }).present();
            _this.reg_status = true;
            _this.status = false;
        });
    };
    HomePage.prototype.guardarSesion = function (data) {
        var _this = this;
        var u = JSON.parse(data);
        var user = [
            Number(u.identidad),
            u.nombre,
            u.username,
            this.validar.Rol(u),
            u.token,
            Number(u.ubicacion[0]),
            Number(u.ubicacion[1])
        ];
        this.sqlite.create({
            name: 'mecanico.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("\n        INSERT INTO usuario (identidad, nombre, username, rol, token, longitud, latitud) VALUES (?, ?, ?, ?, ?, ?, ?)\n      ", user).then(function (resp) {
                _this.navCtrl.setRoot(_this.validar.rootPage(user[3]));
                _this.navCtrl.popToRoot();
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\home\home.html"*/'<ion-header  >\n\n  <ion-navbar  >\n\n    <ion-title class="titulo_principal">\n\n      PitsSpot\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="backgranund_">\n\n  <div class="centrado">\n\n    <ion-img class="logo_home" height="165px" width="130px" src="assets/imgs/logotipo.png"></ion-img>\n\n    <div class="margen-central">\n\n      <ion-item class="txt_mail_login_">\n\n        <ion-label color="primary" floating>Email</ion-label>\n\n        <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_mail_login"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="txt_password_login_">\n\n        <ion-label color="primary" floating>Contraseña</ion-label>\n\n        <ion-input  aria-placeholder="Contraseña" [(ngModel)]="txt_password_login" type="password"></ion-input>\n\n      </ion-item>\n\n      <div class="div_margen_bt" >\n\n        <button class="btn_home" [disabled]="!reg_status" ion-button full (click)="logear()">Login</button>\n\n      </div>\n\n      <div class="div_margen_bt">\n\n        <button class="btn_home" ion-button full [navPush]="regP">Registrarme</button>\n\n      </div>\n\n      <div class="div_margen_bt">\n\n        <a href="#" [navPush]="olvP">¿Olvidó su contraseña?</a>\n\n      </div>\n\n      <div class="div_margen_bt">\n\n        <a href="#" [navPush]="confP">Confirmar mi cuenta</a>\n\n      </div>\n\n      <div class="div_margen_bt" style="display: none">\n\n        <a href="#">Registrar mi taller mecánico</a>\n\n      </div>\n\n      <ion-spinner name="crescent" *ngIf="status"></ion-spinner>\n\n    </div>\n\n  </div>\n\n</ion-content> '/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModEliMecanicoPage; });
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




var AdminModEliMecanicoPage = /** @class */ (function () {
    function AdminModEliMecanicoPage(navCtrl, navParams, validar, alertCtrl, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validar = validar;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.parametro = "";
        this.getMecanicos();
    }
    AdminModEliMecanicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminModEliMecanicoPage');
    };
    AdminModEliMecanicoPage.prototype.getMecanicos = function () {
        var _this = this;
        this.http.obtenerMecanicos().subscribe(function (data) {
            _this.mecanicos = data.json();
        }, function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E0').t,
                subTitle: _this.validar.mensajes('E0').d,
                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
            }).present();
        });
    };
    AdminModEliMecanicoPage.prototype.buscarMecanico = function () {
        var busqueda = (this.parametro).toLowerCase();
        var selection = document.getElementsByClassName('mecan-reg');
        for (var i = 0; i < selection.length; i++) {
            var nomTall = selection[i].getElementsByClassName('mec-nom')[0].innerHTML;
            var nomTalle = selection[i].getElementsByClassName('mec-nom')[1].innerHTML;
            selection[i].removeAttribute('style');
            if (nomTall.toLowerCase().indexOf(busqueda) > -1 || nomTalle.toLowerCase().indexOf(busqueda) > -1) {
                selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;');
            }
            else {
                selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;display:none');
            }
        }
    };
    AdminModEliMecanicoPage.prototype.eliminarMecanico = function (identidad) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: '¿Está seguro de eliminar el mecánico?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.http.eliminarMecanico(identidad).subscribe(function (data) {
                            var resultado = _this.validar.mensajes(data.text()).t;
                            if (resultado == 'Listo') {
                                _this.getMecanicos();
                            }
                            else {
                                _this.alertCtrl.create({
                                    title: _this.validar.mensajes(data.text()).t,
                                    subTitle: _this.validar.mensajes(data.text()).d,
                                    buttons: ['Aceptar']
                                }).present();
                            }
                        }, function (error) {
                            _this.alertCtrl.create({
                                title: _this.validar.mensajes('E0').t,
                                subTitle: _this.validar.mensajes('E0').d,
                                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
                            }).present();
                        });
                    }
                }
            ]
        }).present();
    };
    AdminModEliMecanicoPage.prototype.modificarMecanico = function (identidad, taller, nombre, mail) {
        var modalModificacion = this.modalCtrl.create('AdminModificarMecanicoPage', {
            identidad: identidad,
            nombre: nombre,
            mail: mail,
            taller: taller
        });
        modalModificacion.present();
    };
    AdminModEliMecanicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-mod-eli-mecanico',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-mod-eli-mecanico\admin-mod-eli-mecanico.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mecánicos registrados</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item style="margin-bottom:12px">\n\n    <ion-input placeholder="Buscar taller" [(ngModel)]="parametro" type="text" (keyup)="buscarMecanico()"></ion-input>\n\n    <ion-label color="primary">Buscar</ion-label>\n\n  </ion-item>\n\n\n\n  <ion-grid>\n\n    <ion-row class="centrado">\n\n      <ion-col col-4> <b>Email</b> </ion-col>\n\n      <ion-col col-3><b>Nombre</b></ion-col>\n\n      <ion-col col-5><b>Acciones</b></ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let mecanico of mecanicos" class="mecan-reg" style="border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;">\n\n        <ion-col col-4><i class="mec-nom">{{mecanico.username}}</i></ion-col>\n\n        <ion-col col-3><i class="mec-nom">{{mecanico.nombre}}</i></ion-col>\n\n        <ion-col col-5>\n\n            <ion-buttons end>\n\n                <button ion-button icon-only (click)="modificarMecanico(mecanico.identidad, mecanico.taller, mecanico.nombre, mecanico.username)">\n\n                  <ion-icon ios="ios-create" md="md-create" name="create"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-only color="danger" (click)="eliminarMecanico(mecanico.identidad)">\n\n                  <ion-icon name="trash" ios="ios-trash" md="md-trash"></ion-icon>\n\n                </button>\n\n              </ion-buttons>\n\n        </ion-col>\n\n    </ion-row> \n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-mod-eli-mecanico\admin-mod-eli-mecanico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AdminModEliMecanicoPage);
    return AdminModEliMecanicoPage;
}());

//# sourceMappingURL=admin-mod-eli-mecanico.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModEliProveedorPage; });
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




var AdminModEliProveedorPage = /** @class */ (function () {
    function AdminModEliProveedorPage(navCtrl, navParams, validar, alertCtrl, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validar = validar;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.parametro = "";
        this.getProveedores();
    }
    AdminModEliProveedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminModEliProveedorPage');
    };
    AdminModEliProveedorPage.prototype.getProveedores = function () {
        var _this = this;
        this.http.obtenerProveedores().subscribe(function (data) {
            _this.proveedores = data.json();
        }, function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E0').t,
                subTitle: _this.validar.mensajes('E0').d,
                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
            }).present();
        });
    };
    AdminModEliProveedorPage.prototype.buscarProveedores = function () {
        var busqueda = (this.parametro).toLowerCase();
        var selection = document.getElementsByClassName('prov-reg');
        for (var i = 0; i < selection.length; i++) {
            var nomProv = selection[i].getElementsByClassName('prov-nom')[0].innerHTML;
            selection[i].removeAttribute('style');
            if (nomProv.toLowerCase().indexOf(busqueda) > -1) {
                selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;');
            }
            else {
                selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;display:none');
            }
        }
    };
    AdminModEliProveedorPage.prototype.eliminarProveedor = function (identidad) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Está seguro de eliminar al proveedor',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.http.eliminarProveedor(identidad).subscribe(function (data) {
                            var resultado = _this.validar.mensajes(data.text()).t;
                            if (resultado == 'Listo') {
                                _this.getProveedores();
                            }
                            else {
                                _this.alertCtrl.create({
                                    title: _this.validar.mensajes(data.text()).t,
                                    subTitle: _this.validar.mensajes(data.text()).d,
                                    buttons: ['Aceptar']
                                }).present();
                            }
                        }, function (error) {
                            _this.alertCtrl.create({
                                title: _this.validar.mensajes('E0').t,
                                subTitle: _this.validar.mensajes('E0').d,
                                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
                            }).present();
                        });
                    }
                }
            ]
        }).present();
    };
    AdminModEliProveedorPage.prototype.modificarProveedor = function (identidad, nombre, imagen, descripcion, mail, paypal, cuenta) {
        var modalModificacion = this.modalCtrl.create('AdminModificarProveedorPage', {
            identidad: identidad,
            nombre: nombre,
            imagen: imagen,
            descripcion: descripcion,
            mail: mail,
            paypal: paypal,
            cuenta: cuenta
        });
        modalModificacion.present();
    };
    AdminModEliProveedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-mod-eli-proveedor',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-mod-eli-proveedor\admin-mod-eli-proveedor.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Proveedores registrados</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-item style="margin-bottom:12px">\n      <ion-input placeholder="Buscar proveedor" [(ngModel)]="parametro" type="text" (keyup)="buscarProveedores()"></ion-input>\n      <ion-label color="primary">Buscar</ion-label>\n    </ion-item>\n    <table>\n      <tr *ngFor="let proveedor of proveedores" class="prov-reg" style="border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;">\n        <td style="width: 20%; padding: 6px;" >\n          <img [src]="proveedor.logotipo" width="100%" height="60px">\n        </td>\n        <td style="width: 40%; padding-left: 6px">\n          <i>\n            <b class="prov-nom">{{proveedor.nombre}}</b>\n          </i>\n        </td>\n        <td style="width: 40%">\n          <ion-buttons end>\n            <button ion-button icon-only (click)="modificarProveedor(proveedor.identidad, proveedor.nombre, proveedor.logotipo, proveedor.descripcion, proveedor.username, proveedor.paypal, proveedor.cuenta)" >\n              <ion-icon ios="ios-create" md="md-create" name="create"></ion-icon>\n            </button>\n            <button ion-button icon-only color="danger" (click)="eliminarProveedor(proveedor.identidad)">\n              <ion-icon name="trash" ios="ios-trash" md="md-trash"></ion-icon>\n            </button>\n          </ion-buttons>\n  \n        </td>\n      </tr>\n    </table>\n  \n  \n  </ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-mod-eli-proveedor\admin-mod-eli-proveedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AdminModEliProveedorPage);
    return AdminModEliProveedorPage;
}());

//# sourceMappingURL=admin-mod-eli-proveedor.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModEliTallerPage; });
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




var AdminModEliTallerPage = /** @class */ (function () {
    function AdminModEliTallerPage(navCtrl, navParams, validar, alertCtrl, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validar = validar;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.parametro = "";
        this.getTalleres();
    }
    AdminModEliTallerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminModEliTallerPage');
    };
    AdminModEliTallerPage.prototype.getTalleres = function () {
        var _this = this;
        this.http.obtenerTalleres().subscribe(function (data) {
            _this.talleres = data.json();
        }, function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E0').t,
                subTitle: _this.validar.mensajes('E0').d,
                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
            }).present();
        });
    };
    AdminModEliTallerPage.prototype.buscarTaller = function () {
        var busqueda = (this.parametro).toLowerCase();
        var selection = document.getElementsByClassName('taleres-reg');
        for (var i = 0; i < selection.length; i++) {
            var nomTall = selection[i].getElementsByClassName('tal-nom')[0].innerHTML;
            selection[i].removeAttribute('style');
            if (nomTall.toLowerCase().indexOf(busqueda) > -1) {
                selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;');
            }
            else {
                selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;display:none');
            }
        }
    };
    AdminModEliTallerPage.prototype.eliminarTaller = function (identidad) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Está seguro de eliminar el taller',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.http.eliminarTaller(identidad).subscribe(function (data) {
                            var resultado = _this.validar.mensajes(data.text()).t;
                            if (resultado == 'Listo') {
                                _this.getTalleres();
                            }
                            else {
                                _this.alertCtrl.create({
                                    title: _this.validar.mensajes(data.text()).t,
                                    subTitle: _this.validar.mensajes(data.text()).d,
                                    buttons: ['Aceptar']
                                }).present();
                            }
                        }, function (error) {
                            _this.alertCtrl.create({
                                title: _this.validar.mensajes('E0').t,
                                subTitle: _this.validar.mensajes('E0').d,
                                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
                            }).present();
                        });
                    }
                }
            ]
        }).present();
    };
    AdminModEliTallerPage.prototype.modificarTaller = function (identidad, nombre, imagen, ubicacion, descripcion, mail) {
        var modalModificacion = this.modalCtrl.create('AdminModificarTallerPage', {
            identidad: identidad,
            nombre: nombre,
            imagen: imagen,
            ubicacion: ubicacion,
            descripcion: descripcion,
            mail: mail
        });
        modalModificacion.present();
    };
    AdminModEliTallerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-mod-eli-taller',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-mod-eli-taller\admin-mod-eli-taller.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Talleres registrados</ion-title>\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item style="margin-bottom:12px">\n\n    <ion-input placeholder="Buscar taller" [(ngModel)]="parametro" type="text" (keyup)="buscarTaller()"></ion-input>\n\n    <ion-label color="primary">Buscar</ion-label>\n\n  </ion-item>\n\n  <table>\n\n    <tr *ngFor="let taller of talleres" class="taleres-reg" style="border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;">\n\n      <td style="width: 20%; padding: 6px;" >\n\n        <img [src]="taller.logotipo" width="100%" height="60px">\n\n      </td>\n\n      <td style="width: 40%; padding-left: 6px">\n\n        <i>\n\n          <b class="tal-nom">{{taller.nombre}}</b>\n\n        </i>\n\n      </td>\n\n      <td style="width: 40%">\n\n        <ion-buttons end>\n\n          <button ion-button icon-only (click)="modificarTaller(taller.identidad, taller.nombre, taller.logotipo, taller.ubicacion, taller.descripcion, taller.username)" >\n\n            <ion-icon ios="ios-create" md="md-create" name="create"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only color="danger" (click)="eliminarTaller(taller.identidad)">\n\n            <ion-icon name="trash" ios="ios-trash" md="md-trash"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n      </td>\n\n    </tr>\n\n  </table>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-mod-eli-taller\admin-mod-eli-taller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AdminModEliTallerPage);
    return AdminModEliTallerPage;
}());

//# sourceMappingURL=admin-mod-eli-taller.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRegistroMecanicoPage; });
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





var AdminRegistroMecanicoPage = /** @class */ (function () {
    function AdminRegistroMecanicoPage(navCtrl, navParams, validar, http, alertCtrl, geolocation) {
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
    AdminRegistroMecanicoPage.prototype.Registrar = function () {
        var nombre = this.txt_mecanico_nombre;
        var mail = this.txt_mecanico_mail;
        var pass = this.txt_mecanico_password;
        var rpass = this.txt_mecanico_rpassword;
        var taller = this.select_mecanico_taller;
        if (!this.validar.validar_vacios([nombre, mail, pass, rpass, taller])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (this.validar.validar_correo(mail)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass.length < 8 || rpass.length < 8) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E3').t,
                subTitle: this.validar.mensajes('E3').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass != rpass) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E4').t,
                subTitle: this.validar.mensajes('E4').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.completarRegistro(nombre, mail, taller, pass);
    };
    AdminRegistroMecanicoPage.prototype.completarRegistro = function (nombre, mail, taller, pass) {
        var _this = this;
        var latitud, longitud;
        this.reg_status = false;
        this.status = true;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp_geo) {
            latitud = resp_geo.coords.latitude;
            longitud = resp_geo.coords.longitude;
            _this.http.registrarMecanico(nombre, taller, mail, pass, latitud, longitud).subscribe(function (data) {
                var resultado = _this.validar.mensajes(data.text()).t;
                if (resultado == 'Listo') {
                    _this.alertCtrl.create({
                        title: 'Cuenta registrada con éxito',
                        subTitle: 'Ahora se puede iniciar sesión',
                        buttons: [{
                                text: 'Aceptar',
                                role: 'cancel',
                                handler: function (data) {
                                    _this.navCtrl.popToRoot();
                                }
                            }]
                    }).present();
                }
                else {
                    _this.alertCtrl.create({
                        title: _this.validar.mensajes(data.text()).t,
                        subTitle: _this.validar.mensajes(data.text()).d,
                        buttons: ['Aceptar']
                    }).present();
                }
                _this.reg_status = true;
                _this.status = false;
            }, function (error) {
                _this.alertCtrl.create({
                    title: _this.validar.mensajes('E0').d,
                    subTitle: _this.validar.mensajes('E0').d,
                    buttons: ['Aceptar']
                }).present();
                _this.reg_status = true;
                _this.status = false;
            });
        }).catch(function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E6').t,
                subTitle: _this.validar.mensajes('E6').d,
                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
            }).present();
            _this.reg_status = true;
            _this.status = false;
        });
    };
    AdminRegistroMecanicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-registro-mecanico',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-registro-mecanico\admin-registro-mecanico.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registrar mecánico</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="centrado">\n\n  <h1>Registro de mecánicos</h1>\n\n  <ion-item>\n\n    <ion-label color="primary">Taller mecánico</ion-label>\n\n    <ion-select [(ngModel)]="select_mecanico_taller">\n\n      <ion-option  *ngFor="let taller of talleres" [value]="taller.identidad">{{taller.nombre}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Nombre del mecánico</ion-label>\n\n    <ion-input aria-placeholder="Nombre" type="text" [(ngModel)]="txt_mecanico_nombre"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Email del mecánico</ion-label>\n\n    <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_mecanico_mail"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Contraseña</ion-label>\n\n    <ion-input aria-placeholder="Email" type="password" [(ngModel)]="txt_mecanico_password"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Repetir contraseña</ion-label>\n\n    <ion-input aria-placeholder="Email" type="password" [(ngModel)]="txt_mecanico_rpassword"></ion-input>\n\n  </ion-item>\n\n  <div class="div_margen_bt">\n\n    <button ion-button full (click)="Registrar()" [disabled]="!reg_status">Registrar</button>\n\n  </div>\n\n  <ion-spinner name="crescent" *ngIf="status"></ion-spinner>\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-registro-mecanico\admin-registro-mecanico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AdminRegistroMecanicoPage);
    return AdminRegistroMecanicoPage;
}());

//# sourceMappingURL=admin-registro-mecanico.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRegistroProveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminRegistroProveedorPage = /** @class */ (function () {
    function AdminRegistroProveedorPage(navCtrl, navParams, alertCtrl, validar, imagePicker, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.validar = validar;
        this.imagePicker = imagePicker;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.reg_status = true;
        this.status = false;
        this.txt_proveedor_mail_paypal = "";
        this.txt_proveedor_numero_cuenta = "";
    }
    AdminRegistroProveedorPage.prototype.ionViewDidLoad = function () {
        this.picToView = "assets/imgs/proveedor.png";
    };
    AdminRegistroProveedorPage.prototype.escogerLogotipo = function () {
        var _this = this;
        this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(function (results) {
            _this.picToView = results[0];
            _this.toDataUrl(_this.picToView, function (myBase64) {
                _this.txt_proveedor_logo = myBase64.toString();
            });
        }, function (err) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E12').t,
                subTitle: _this.validar.mensajes('E12').d,
                buttons: ['Aceptar']
            }).present();
        });
    };
    AdminRegistroProveedorPage.prototype.toDataUrl = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () { callback(reader.result); };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    AdminRegistroProveedorPage.prototype.guardarProveedor = function () {
        var nombre = this.txt_proveedor_nombre;
        var descripcion = this.txt_proveedor_descripcion;
        var mail = this.txt_proveedor_mail;
        var pass = this.txt_proveedor_password;
        var rpass = this.txt_proveedor_rpassword;
        if (!this.validar.validar_vacios([nombre, descripcion, mail, pass, rpass])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (this.validar.validar_correo(mail)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass.length < 8 || rpass.length < 8) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E3').t,
                subTitle: this.validar.mensajes('E3').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass != rpass) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E4').t,
                subTitle: this.validar.mensajes('E4').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.completarRegistro();
    };
    AdminRegistroProveedorPage.prototype.completarRegistro = function () {
        var _this = this;
        this.reg_status = false;
        this.status = true;
        var postdata = new FormData();
        postdata.append('logotipo', this.txt_proveedor_logo);
        postdata.append('nombre', this.txt_proveedor_nombre);
        postdata.append('descripcion', this.txt_proveedor_descripcion);
        postdata.append('mail', this.txt_proveedor_mail);
        postdata.append('pass', this.txt_proveedor_password);
        postdata.append('paypal', this.txt_proveedor_mail_paypal);
        postdata.append('cuenta', this.txt_proveedor_numero_cuenta);
        this.http.registrarProveedor(postdata).subscribe(function (data) {
            var resultado = _this.validar.mensajes(data.text()).t;
            if (resultado == 'Listo') {
                _this.alertCtrl.create({
                    title: 'Cuenta registrada con éxito',
                    subTitle: 'Ahora se puede iniciar sesión',
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
                    subTitle: "Esta imágen pesa demasiado, no se puede guardar",
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
    AdminRegistroProveedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-registro-proveedor',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-registro-proveedor\admin-registro-proveedor.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registro de proveedor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="centrado">\n    <h1>Registro</h1>\n    <ion-img height="110px" width="100px" (click)="escogerLogotipo()" [src]="picToView"></ion-img>\n    <ion-input style="display: none" type="text" [(ngModel)]="txt_proveedor_logo"></ion-input>\n    <p>Click en la imágen para escoger logotipo</p>\n    <ion-item>\n      <ion-label color="primary" floating>Nombre del proveedo</ion-label>\n      <ion-input aria-placeholder="Nombre" type="text" [(ngModel)]="txt_proveedor_nombre"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Descripción del proveedor</ion-label>\n      <ion-textarea maxlenght="100" aria-placeholder="Nombre" type="text" [(ngModel)]="txt_proveedor_descripcion"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_proveedor_mail"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Email paypal (opcional)</ion-label>\n      <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_proveedor_mail_paypal"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Cuenta bancaria(opcional)</ion-label>\n      <ion-input aria-placeholder="Número" type="number" [(ngModel)]="txt_proveedor_numero_cuenta"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Contraseña</ion-label>\n      <ion-input aria-placeholder="Contraseña" type="password" [(ngModel)]="txt_proveedor_password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Confirmar contraseña</ion-label>\n      <ion-input aria-placeholder="Contraseña" type="password" [(ngModel)]="txt_proveedor_rpassword"></ion-input>\n    </ion-item>\n    <button style="margin-top:12px" ion-button (click)="guardarProveedor()" [disabled]="!reg_status">Guardar</button>\n    <ion-spinner name="crescent" *ngIf="status"></ion-spinner>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-registro-proveedor\admin-registro-proveedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AdminRegistroProveedorPage);
    return AdminRegistroProveedorPage;
}());

//# sourceMappingURL=admin-registro-proveedor.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRegistroTallerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminRegistroTallerPage = /** @class */ (function () {
    function AdminRegistroTallerPage(navCtrl, navParams, alertCtrl, validar, imagePicker, http, modalCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.validar = validar;
        this.imagePicker = imagePicker;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.reg_status = true;
        this.status = false;
    }
    AdminRegistroTallerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.picToView = "assets/imgs/taller.png";
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp_geo) {
            _this.txt_taller_ubicacion = resp_geo.coords.latitude + " ; " + resp_geo.coords.longitude;
        }).catch(function (error) {
            _this.txt_taller_ubicacion = '0.0 ; 0.0';
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E6').d,
                subTitle: _this.validar.mensajes('E6').d,
                buttons: ['Aceptar']
            }).present();
        });
    };
    AdminRegistroTallerPage.prototype.escogerLogotipo = function () {
        var _this = this;
        this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(function (results) {
            _this.picToView = results[0];
            _this.toDataUrl(_this.picToView, function (myBase64) {
                _this.txt_taller_logo = myBase64.toString();
            });
        }, function (err) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E12').t,
                subTitle: _this.validar.mensajes('E12').d,
                buttons: ['Aceptar']
            }).present();
        });
    };
    AdminRegistroTallerPage.prototype.guardarTaller = function () {
        var nombre = this.txt_taller_nombre;
        var descripcion = this.txt_taller_descripcion;
        var mail = this.txt_taller_mail;
        var pass = this.txt_taller_password;
        var rpass = this.txt_taller_rpassword;
        if (!this.validar.validar_vacios([nombre, descripcion, mail, pass, rpass])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (this.validar.validar_correo(mail)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass.length < 8 || rpass.length < 8) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E3').t,
                subTitle: this.validar.mensajes('E3').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass != rpass) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E4').t,
                subTitle: this.validar.mensajes('E4').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.completarRegistro(this.txt_taller_logo, this.txt_taller_ubicacion, nombre, descripcion, mail, pass);
    };
    AdminRegistroTallerPage.prototype.completarRegistro = function (imagen, ubicacion, nombre, descripcion, mail, pass) {
        var _this = this;
        this.reg_status = false;
        this.status = true;
        var postdata = new FormData();
        postdata.append('logotipo', this.txt_taller_logo);
        postdata.append('ubicacion', this.txt_taller_ubicacion);
        postdata.append('nombre', this.txt_taller_nombre);
        postdata.append('descripcion', this.txt_taller_descripcion);
        postdata.append('mail', this.txt_taller_mail);
        postdata.append('pass', this.txt_taller_password);
        this.http.registrarTaller(postdata).subscribe(function (data) {
            var resultado = _this.validar.mensajes(data.text()).t;
            if (resultado == 'Listo') {
                _this.alertCtrl.create({
                    title: 'Cuenta registrada con éxito',
                    subTitle: 'Ahora se puede iniciar sesión',
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
                    subTitle: "Esta imágen pesa demasiado, no se puede guardar",
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
    AdminRegistroTallerPage.prototype.ubicar = function () {
        var _this = this;
        var modal_mapa = this.modalCtrl.create('MapaObtenerPage');
        modal_mapa.onDidDismiss(function (punto) { _this.txt_taller_ubicacion = punto.coordenadas; });
        modal_mapa.present();
    };
    AdminRegistroTallerPage.prototype.toDataUrl = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () { callback(reader.result); };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    AdminRegistroTallerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-registro-taller',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-registro-taller\admin-registro-taller.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registro de taller mecánico</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="centrado">\n\n    <h1>Registro</h1>\n\n    <ion-img height="110px" width="100px" (click)="escogerLogotipo()" [src]="picToView"></ion-img>\n\n    <ion-input style="display: none" type="text" [(ngModel)]="txt_taller_logo"></ion-input>\n\n    <p>Click en la imágen para escoger logotipo</p>\n\n    <ion-item class="centrado">\n\n    <div (click)="ubicar()">\n\n      <label for="">Click aqui para escoger su ubicación</label>\n\n      <p>{{txt_taller_ubicacion}}</p>\n\n    </div>\n\n  </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Nombre del taller</ion-label>\n\n      <ion-input aria-placeholder="Nombre" type="text" [(ngModel)]="txt_taller_nombre"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Descripción del taller</ion-label>\n\n      <ion-textarea maxlenght="100" aria-placeholder="Nombre" type="text" [(ngModel)]="txt_taller_descripcion"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Email</ion-label>\n\n      <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_taller_mail"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Contraseña</ion-label>\n\n      <ion-input aria-placeholder="Contraseña" type="password" [(ngModel)]="txt_taller_password"></ion-input>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label color="primary" floating>Confirmar contraseña</ion-label>\n\n      <ion-input aria-placeholder="Contraseña" type="password" [(ngModel)]="txt_taller_rpassword"></ion-input>\n\n    </ion-item>\n\n    <button style="margin-top:12px" ion-button  (click)="guardarTaller()" [disabled]="!reg_status">Guardar</button>\n\n    <ion-spinner name="crescent" *ngIf="status" ></ion-spinner>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-registro-taller\admin-registro-taller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AdminRegistroTallerPage);
    return AdminRegistroTallerPage;
}());

//# sourceMappingURL=admin-registro-taller.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TallerRegistroMecanicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TallerRegistroMecanicoPage = /** @class */ (function () {
    function TallerRegistroMecanicoPage(navCtrl, navParams, alertCtrl, sqlite, http, validar, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.sqlite = sqlite;
        this.http = http;
        this.validar = validar;
        this.geolocation = geolocation;
        this.txt_mecanico_taller = "";
        this.sqlite.create({
            name: 'mecanico.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("SELECT * FROM usuario", []).then(function (usuario) {
                _this.txt_mecanico_taller = usuario.rows.item(0).identidad;
            }).catch(function (error) {
                _this.cerrarSesion;
            });
        }).catch(function (error) {
            _this.cerrarSesion;
        });
        this.reg_status = true;
        this.status = false;
    }
    TallerRegistroMecanicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TallerRegistroMecanicoPage');
    };
    TallerRegistroMecanicoPage.prototype.cerrarSesion = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Error de sesión',
            subTitle: 'Vuelva a iniciar sesión',
            buttons: [{
                    text: 'Aceptar',
                    role: 'cancel',
                    handler: function (data) {
                        _this.validar.logout();
                    }
                }]
        }).present();
    };
    TallerRegistroMecanicoPage.prototype.Registrar = function () {
        var nombre = this.txt_mecanico_nombre;
        var mail = this.txt_mecanico_mail;
        var pass = this.txt_mecanico_password;
        var rpass = this.txt_mecanico_rpassword;
        var taller = this.txt_mecanico_taller;
        if (!this.validar.validar_vacios([nombre, mail, pass, rpass, taller])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (this.validar.validar_correo(mail)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass.length < 8 || rpass.length < 8) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E3').t,
                subTitle: this.validar.mensajes('E3').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass != rpass) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E4').t,
                subTitle: this.validar.mensajes('E4').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.completarRegistro(nombre, mail, taller, pass);
    };
    TallerRegistroMecanicoPage.prototype.completarRegistro = function (nombre, mail, taller, pass) {
        var _this = this;
        var latitud, longitud;
        this.reg_status = false;
        this.status = true;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp_geo) {
            latitud = resp_geo.coords.latitude;
            longitud = resp_geo.coords.longitude;
            _this.http.registrarMecanico(nombre, taller, mail, pass, latitud, longitud).subscribe(function (data) {
                var resultado = _this.validar.mensajes(data.text()).t;
                if (resultado == 'Listo') {
                    _this.alertCtrl.create({
                        title: 'Cuenta registrada con éxito',
                        subTitle: 'Ahora se puede iniciar sesión',
                        buttons: [{
                                text: 'Aceptar',
                                role: 'cancel',
                                handler: function (data) {
                                    _this.navCtrl.popToRoot();
                                }
                            }]
                    }).present();
                }
                else {
                    _this.alertCtrl.create({
                        title: _this.validar.mensajes(data.text()).t,
                        subTitle: _this.validar.mensajes(data.text()).d,
                        buttons: ['Aceptar']
                    }).present();
                }
                _this.reg_status = true;
                _this.status = false;
            }, function (error) {
                _this.alertCtrl.create({
                    title: _this.validar.mensajes('E0').d,
                    subTitle: _this.validar.mensajes('E0').d,
                    buttons: ['Aceptar']
                }).present();
                _this.reg_status = true;
                _this.status = false;
            });
        }).catch(function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E6').t,
                subTitle: _this.validar.mensajes('E6').d,
                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
            }).present();
            _this.reg_status = true;
            _this.status = false;
        });
    };
    TallerRegistroMecanicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-taller-registro-mecanico',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\taller-registro-mecanico\taller-registro-mecanico.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registrar mecánico</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="centrado">\n\n  <h1>Registro de mecánicos</h1>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Nombre del mecánico</ion-label>\n\n    <ion-input aria-placeholder="Nombre" type="text" [(ngModel)]="txt_mecanico_nombre"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Email del mecánico</ion-label>\n\n    <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_mecanico_mail"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Contraseña</ion-label>\n\n    <ion-input aria-placeholder="Email" type="password" [(ngModel)]="txt_mecanico_password"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" floating>Repetir contraseña</ion-label>\n\n    <ion-input aria-placeholder="Email" type="password" [(ngModel)]="txt_mecanico_rpassword"></ion-input>\n\n  </ion-item>\n\n  <div class="div_margen_bt">\n\n    <button ion-button full (click)="Registrar()" [disabled]="!reg_status">Registrar</button>\n\n  </div>\n\n  <ion-spinner name="crescent" *ngIf="status"></ion-spinner>\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\taller-registro-mecanico\taller-registro-mecanico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], TallerRegistroMecanicoPage);
    return TallerRegistroMecanicoPage;
}());

//# sourceMappingURL=taller-registro-mecanico.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TallerModEliMecanicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TallerModEliMecanicoPage = /** @class */ (function () {
    function TallerModEliMecanicoPage(navCtrl, navParams, validar, alertCtrl, http, sqlite, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validar = validar;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.sqlite = sqlite;
        this.modalCtrl = modalCtrl;
        this.parametro = "";
        this.sqlite.create({
            name: 'mecanico.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("SELECT * FROM usuario", []).then(function (usuario) {
                _this.getMecanicos(usuario.rows.item(0).identidad);
            }).catch(function (error) {
                _this.cerrarSesion;
            });
        }).catch(function (error) {
            _this.cerrarSesion;
        });
    }
    TallerModEliMecanicoPage.prototype.cerrarSesion = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Error de sesión',
            subTitle: 'Vuelva a iniciar sesión',
            buttons: [{
                    text: 'Aceptar',
                    role: 'cancel',
                    handler: function (data) {
                        _this.validar.logout();
                    }
                }]
        }).present();
    };
    TallerModEliMecanicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TallerModEliMecanicoPage');
    };
    TallerModEliMecanicoPage.prototype.getMecanicos = function (ident) {
        var _this = this;
        this.http.obtenerMecanicosTaller(ident).subscribe(function (data) {
            _this.mecanicos = data.json();
        }, function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E0').t,
                subTitle: _this.validar.mensajes('E0').d,
                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
            }).present();
        });
    };
    TallerModEliMecanicoPage.prototype.buscarMecanico = function () {
        var busqueda = (this.parametro).toLowerCase();
        var selection = document.getElementsByClassName('mecan-reg');
        for (var i = 0; i < selection.length; i++) {
            var nomTall = selection[i].getElementsByClassName('mec-nom')[0].innerHTML;
            var nomTalle = selection[i].getElementsByClassName('mec-nom')[1].innerHTML;
            selection[i].removeAttribute('style');
            if (nomTall.toLowerCase().indexOf(busqueda) > -1 || nomTalle.toLowerCase().indexOf(busqueda) > -1) {
                selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;');
            }
            else {
                selection[i].setAttribute('style', 'border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;display:none');
            }
        }
    };
    TallerModEliMecanicoPage.prototype.eliminarMecanico = function (identidad) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Está seguro de eliminar el taller',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.http.eliminarMecanico(identidad).subscribe(function (data) {
                            var resultado = _this.validar.mensajes(data.text()).t;
                            if (resultado == 'Listo') {
                                _this.getMecanicos(identidad);
                            }
                            else {
                                _this.alertCtrl.create({
                                    title: _this.validar.mensajes(data.text()).t,
                                    subTitle: _this.validar.mensajes(data.text()).d,
                                    buttons: ['Aceptar']
                                }).present();
                            }
                        }, function (error) {
                            _this.alertCtrl.create({
                                title: _this.validar.mensajes('E0').t,
                                subTitle: _this.validar.mensajes('E0').d,
                                buttons: [{ text: 'Aceptar', role: 'cancel', handler: function (data) { _this.navCtrl.popToRoot(); } }]
                            }).present();
                        });
                    }
                }
            ]
        }).present();
    };
    TallerModEliMecanicoPage.prototype.modificarMecanico = function (identidad, taller, nombre, mail) {
        var modalModificacion = this.modalCtrl.create('TallerModificarMecanicoPage', {
            identidad: identidad,
            nombre: nombre,
            mail: mail,
            taller: taller
        });
        modalModificacion.present();
    };
    TallerModEliMecanicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-taller-mod-eli-mecanico',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\taller-mod-eli-mecanico\taller-mod-eli-mecanico.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mecánicos registrados</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item style="margin-bottom:12px">\n\n    <ion-input placeholder="Buscar taller" [(ngModel)]="parametro" type="text" (keyup)="buscarMecanico()"></ion-input>\n\n    <ion-label color="primary">Buscar</ion-label>\n\n  </ion-item>\n\n\n\n  <ion-grid>\n\n    <ion-row class="centrado">\n\n      <ion-col col-4> <b>Email</b> </ion-col>\n\n      <ion-col col-3><b>Nombre</b></ion-col>\n\n      <ion-col col-5><b>Acciones</b></ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let mecanico of mecanicos" class="mecan-reg" style="border-bottom: 1px dashed rgb(100, 95, 95); padding: 4px;">\n\n        <ion-col col-4><i class="mec-nom">{{mecanico.username}}</i></ion-col>\n\n        <ion-col col-3><i class="mec-nom">{{mecanico.nombre}}</i></ion-col>\n\n        <ion-col col-5>\n\n            <ion-buttons end>\n\n                <button ion-button icon-only (click)="modificarMecanico(mecanico.identidad, mecanico.taller, mecanico.nombre, mecanico.username)">\n\n                  <ion-icon ios="ios-create" md="md-create" name="create"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-only color="danger" (click)="eliminarMecanico(mecanico.identidad)">\n\n                  <ion-icon name="trash" ios="ios-trash" md="md-trash"></ion-icon>\n\n                </button>\n\n              </ion-buttons>\n\n        </ion-col>\n\n    </ion-row> \n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\taller-mod-eli-mecanico\taller-mod-eli-mecanico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], TallerModEliMecanicoPage);
    return TallerModEliMecanicoPage;
}());

//# sourceMappingURL=taller-mod-eli-mecanico.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_mod_eli_mecanico_admin_mod_eli_mecanico__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_mod_eli_taller_admin_mod_eli_taller__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_registro_mecanico_admin_registro_mecanico__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_admin_registro_taller_admin_registro_taller__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cambiar_usuario_cambiar_usuario__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_confirmar_confirmar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_olvido_olvido__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_principal_admin_principal_admin__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_principal_mecanico_principal_mecanico__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_principal_taller_principal_taller__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_principal_usuario_principal_usuario__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_registro_registro__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_taller_mod_eli_mecanico_taller_mod_eli_mecanico__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_taller_registro_mecanico_taller_registro_mecanico__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_admin_registro_proveedor_admin_registro_proveedor__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_admin_mod_eli_proveedor_admin_mod_eli_proveedor__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_principal_proveedor_principal_proveedor__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_http_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_validaciones_validaciones__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_valinterno_valinterno__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_mod_eli_mecanico_admin_mod_eli_mecanico__["a" /* AdminModEliMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_mod_eli_taller_admin_mod_eli_taller__["a" /* AdminModEliTallerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_registro_mecanico_admin_registro_mecanico__["a" /* AdminRegistroMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_admin_registro_taller_admin_registro_taller__["a" /* AdminRegistroTallerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cambiar_usuario_cambiar_usuario__["a" /* CambiarUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_confirmar_confirmar__["a" /* ConfirmarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_olvido_olvido__["a" /* OlvidoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_principal_admin_principal_admin__["a" /* PrincipalAdminPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_principal_mecanico_principal_mecanico__["a" /* PrincipalMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_principal_taller_principal_taller__["a" /* PrincipalTallerPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_principal_usuario_principal_usuario__["a" /* PrincipalUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_taller_mod_eli_mecanico_taller_mod_eli_mecanico__["a" /* TallerModEliMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_taller_registro_mecanico_taller_registro_mecanico__["a" /* TallerRegistroMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_admin_registro_proveedor_admin_registro_proveedor__["a" /* AdminRegistroProveedorPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_admin_mod_eli_proveedor_admin_mod_eli_proveedor__["a" /* AdminModEliProveedorPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_principal_proveedor_principal_proveedor__["a" /* PrincipalProveedorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-mod-eli-mecanico/admin-mod-eli-mecanico.module#AdminModEliMecanicoPageModule', name: 'AdminModEliMecanicoPage', segment: 'admin-mod-eli-mecanico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-mod-eli-proveedor/admin-mod-eli-proveedor.module#AdminModEliProveedorPageModule', name: 'AdminModEliProveedorPage', segment: 'admin-mod-eli-proveedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-modificar-mecanico/admin-modificar-mecanico.module#AdminModificarMecanicoPageModule', name: 'AdminModificarMecanicoPage', segment: 'admin-modificar-mecanico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-modificar-proveedor/admin-modificar-proveedor.module#AdminModificarProveedorPageModule', name: 'AdminModificarProveedorPage', segment: 'admin-modificar-proveedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-mod-eli-taller/admin-mod-eli-taller.module#AdminModEliTallerPageModule', name: 'AdminModEliTallerPage', segment: 'admin-mod-eli-taller', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-modificar-taller/admin-modificar-taller.module#AdminModificarTallerPageModule', name: 'AdminModificarTallerPage', segment: 'admin-modificar-taller', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-registro-mecanico/admin-registro-mecanico.module#AdminRegistroMecanicoPageModule', name: 'AdminRegistroMecanicoPage', segment: 'admin-registro-mecanico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-registro-proveedor/admin-registro-proveedor.module#AdminRegistroProveedorPageModule', name: 'AdminRegistroProveedorPage', segment: 'admin-registro-proveedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cambiar-usuario/cambiar-usuario.module#CambiarUsuarioPageModule', name: 'CambiarUsuarioPage', segment: 'cambiar-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmar/confirmar.module#ConfirmarPageModule', name: 'ConfirmarPage', segment: 'confirmar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-admin/lista-admin.module#ListaAdminPageModule', name: 'ListaAdminPage', segment: 'lista-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-mecanico/lista-mecanico.module#ListaMecanicoPageModule', name: 'ListaMecanicoPage', segment: 'lista-mecanico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-taller/lista-taller.module#ListaTallerPageModule', name: 'ListaTallerPage', segment: 'lista-taller', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa-obtener/mapa-obtener.module#MapaObtenerPageModule', name: 'MapaObtenerPage', segment: 'mapa-obtener', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-registro-taller/admin-registro-taller.module#AdminRegistroTallerPageModule', name: 'AdminRegistroTallerPage', segment: 'admin-registro-taller', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/olvido/olvido.module#OlvidoPageModule', name: 'OlvidoPage', segment: 'olvido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-admin/principal-admin.module#PrincipalAdminPageModule', name: 'PrincipalAdminPage', segment: 'principal-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-mecanico/principal-mecanico.module#PrincipalMecanicoPageModule', name: 'PrincipalMecanicoPage', segment: 'principal-mecanico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-proveedor/principal-proveedor.module#PrincipalProveedorPageModule', name: 'PrincipalProveedorPage', segment: 'principal-proveedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-taller/principal-taller.module#PrincipalTallerPageModule', name: 'PrincipalTallerPage', segment: 'principal-taller', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-usuario/principal-usuario.module#PrincipalUsuarioPageModule', name: 'PrincipalUsuarioPage', segment: 'principal-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taller-mod-eli-mecanico/taller-mod-eli-mecanico.module#TallerModEliMecanicoPageModule', name: 'TallerModEliMecanicoPage', segment: 'taller-mod-eli-mecanico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taller-modificar-mecanico/taller-modificar-mecanico.module#TallerModificarMecanicoPageModule', name: 'TallerModificarMecanicoPage', segment: 'taller-modificar-mecanico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taller-registro-mecanico/taller-registro-mecanico.module#TallerRegistroMecanicoPageModule', name: 'TallerRegistroMecanicoPage', segment: 'taller-registro-mecanico', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_mod_eli_mecanico_admin_mod_eli_mecanico__["a" /* AdminModEliMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_mod_eli_taller_admin_mod_eli_taller__["a" /* AdminModEliTallerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_registro_mecanico_admin_registro_mecanico__["a" /* AdminRegistroMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_admin_registro_taller_admin_registro_taller__["a" /* AdminRegistroTallerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cambiar_usuario_cambiar_usuario__["a" /* CambiarUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_confirmar_confirmar__["a" /* ConfirmarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_olvido_olvido__["a" /* OlvidoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_principal_admin_principal_admin__["a" /* PrincipalAdminPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_principal_mecanico_principal_mecanico__["a" /* PrincipalMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_principal_taller_principal_taller__["a" /* PrincipalTallerPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_principal_usuario_principal_usuario__["a" /* PrincipalUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_taller_mod_eli_mecanico_taller_mod_eli_mecanico__["a" /* TallerModEliMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_taller_registro_mecanico_taller_registro_mecanico__["a" /* TallerRegistroMecanicoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_admin_registro_proveedor_admin_registro_proveedor__["a" /* AdminRegistroProveedorPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_admin_mod_eli_proveedor_admin_mod_eli_proveedor__["a" /* AdminModEliProveedorPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_principal_proveedor_principal_proveedor__["a" /* PrincipalProveedorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_29__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_valinterno_valinterno__["a" /* ValinternoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValinternoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_principal_admin_principal_admin__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_principal_mecanico_principal_mecanico__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_principal_taller_principal_taller__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_usuario_principal_usuario__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ValinternoProvider = /** @class */ (function () {
    function ValinternoProvider(alertCtrl, sqlite, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.sqlite = sqlite;
        this.loadingCtrl = loadingCtrl;
        this.MENSAJES = [
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
            /*E10*/ { t: 'Error', d: 'Ha ocurrido un error en el servidor' }
        ];
        console.log('Hello ValinternoProvider Provider');
    }
    ValinternoProvider.prototype.rootPage = function (rol) {
        var pagina = null;
        switch (rol) {
            case rol: {
                pagina = __WEBPACK_IMPORTED_MODULE_3__pages_principal_admin_principal_admin__["a" /* PrincipalAdminPage */];
            }
            case rol: {
                pagina = __WEBPACK_IMPORTED_MODULE_5__pages_principal_taller_principal_taller__["a" /* PrincipalTallerPage */];
            }
            case rol: {
                pagina = __WEBPACK_IMPORTED_MODULE_4__pages_principal_mecanico_principal_mecanico__["a" /* PrincipalMecanicoPage */];
            }
            default: {
                pagina = __WEBPACK_IMPORTED_MODULE_6__pages_principal_usuario_principal_usuario__["a" /* PrincipalUsuarioPage */];
            }
        }
        return pagina;
    };
    ValinternoProvider.prototype.Rol = function (data) {
        if (data.esAdministrador)
            return 1;
        if (data.esTaller)
            return 2;
        if (data.esMecanico)
            return 3;
        return 4;
    };
    ValinternoProvider.prototype.validar_vacios = function (inputs) {
        var contador = 0;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i] != undefined)
                contador++;
        }
        return (contador == inputs.length) ? true : false;
    };
    ValinternoProvider.prototype.validar_correo = function (mail) {
        return (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))) ? true : false;
    };
    ValinternoProvider.prototype.mensajes = function (data) {
        var salida = { t: 'Listo', d: data };
        switch (data) {
            case 'E0': {
                salida = this.MENSAJES[0];
                break;
            }
            case 'E1': {
                salida = this.MENSAJES[1];
                break;
            }
            case 'E2': {
                salida = this.MENSAJES[2];
                break;
            }
            case 'E3': {
                salida = this.MENSAJES[3];
                break;
            }
            case 'E4': {
                salida = this.MENSAJES[4];
                break;
            }
            case 'E5': {
                salida = this.MENSAJES[5];
                break;
            }
            case 'E6': {
                salida = this.MENSAJES[6];
                break;
            }
            case 'E7': {
                salida = this.MENSAJES[7];
                break;
            }
            case 'E8': {
                salida = this.MENSAJES[8];
                break;
            }
            case 'E9': {
                salida = this.MENSAJES[9];
                break;
            }
            case 'E10': {
                salida = this.MENSAJES[10];
                break;
            }
            default: {
            }
        }
        return salida;
    };
    ValinternoProvider.prototype.logout = function () {
        var _this = this;
        this.sqlite.create({
            name: 'mecanico.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM usuario', []).then(function (res) {
                _this.loadingCtrl.create({
                    content: 'Cerrando sesión...'
                }).present();
                window.location.reload();
            }).catch(function (error) {
                _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: error,
                    buttons: ['Aceptar']
                }).present();
            });
        }).catch(function (error) {
            _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Ha existido un error al cerrar sesión dos',
                buttons: ['Aceptar']
            }).present();
        });
    };
    ValinternoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ValinternoProvider);
    return ValinternoProvider;
}());

//# sourceMappingURL=valinterno.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CambiarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_valinterno_valinterno__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CambiarUsuarioPage = /** @class */ (function () {
    function CambiarUsuarioPage(navCtrl, navParams, http, validar, sqlite, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.validar = validar;
        this.sqlite = sqlite;
        this.alertCtrl = alertCtrl;
        this.reg_status = true;
        this.status = false;
    }
    CambiarUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CambiarUsuarioPage');
    };
    CambiarUsuarioPage.prototype.cambiarP = function () {
        var _this = this;
        var pass = this.txt_pass_cambiar;
        var npass = this.txt_npass_cambiar;
        var rnpass = this.txt_rnpass_cambiar;
        if (!this.validar.validar_vacios([pass, npass, rnpass])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (pass.length < 8 || npass.length < 8 || rnpass.length < 8) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E3').t,
                subTitle: this.validar.mensajes('E3').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        if (rnpass != npass) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E4').t,
                subTitle: this.validar.mensajes('E4').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.reg_status = false;
        this.status = true;
        this.sqlite.create({
            name: 'mecanico.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * from usuario', []).then(function (data) {
                var lists = [];
                for (var i = 0; i < data.rows.length; i++) {
                    lists.push(data.rows.item(i));
                }
                var identidad = lists[0].identidad;
                var token = lists[0].token;
                var usuario = lists[0].username;
                _this.http.cambiarPassword(usuario, identidad, token, pass, npass).subscribe(function (data) {
                    var resultado = _this.validar.mensajes(data.text()).t;
                    if (resultado == 'Listo') {
                        _this.alertCtrl.create({
                            title: 'Listo',
                            subTitle: 'Contraseña cambiada exitosamente',
                            buttons: [{
                                    text: 'Aeptar',
                                    role: 'cancel',
                                    handler: function (data) {
                                        _this.navCtrl.popToRoot();
                                    }
                                }]
                        }).present();
                    }
                    else {
                        _this.alertCtrl.create({
                            title: _this.validar.mensajes(data.text()).t,
                            subTitle: _this.validar.mensajes(data.text()).d,
                            buttons: ['Aceptar']
                        }).present();
                    }
                    _this.reg_status = true;
                    _this.status = false;
                }, function (error) {
                    _this.alertCtrl.create({
                        title: _this.validar.mensajes('E0').t,
                        subTitle: _this.validar.mensajes('E0').d,
                        buttons: ['Aceptar']
                    }).present();
                    return;
                });
            }).catch(function (error) {
                _this.alertCtrl.create({
                    title: _this.validar.mensajes('E0').t,
                    subTitle: _this.validar.mensajes('E0').d,
                    buttons: ['Aceptar']
                }).present();
                return;
            });
        }).catch(function (error) {
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E0').t,
                subTitle: _this.validar.mensajes('E0').d,
                buttons: ['Aceptar']
            }).present();
            return;
        });
    };
    CambiarUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cambiar-usuario',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\cambiar-usuario\cambiar-usuario.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cambiar contraseña</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding  class="backgranund_">\n\n  <div class="centrado">\n\n      <ion-img class="logo_home" height="130px" width="100px" src="assets/imgs/logotipo.png" style="width: 90px; height: 60px;"></ion-img>\n\n      <h1 class="titulo_principal" >CAMBIA TU CONTRASEÑA</h1>\n\n      <ion-img class="logo_home" height="80px" width="80px" src="assets/imgs/check2.png"></ion-img>\n\n      <p class="titulo_secundario">Ingrese su contraseña actual</p>\n\n      <ion-item class="txt_pass_cambiar">\n\n        <ion-label color="primary" >Contraseña actual</ion-label>\n\n        <ion-input aria-placeholder="Pass" type="password" [(ngModel)]="txt_pass_cambiar"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="txt_npass_cambiar">\n\n          <ion-label color="primary" >Nueva contraseña</ion-label>\n\n          <ion-input aria-placeholder="Pass" type="password" [(ngModel)]="txt_npass_cambiar"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="txt_rnpass_cambiar">\n\n            <ion-label color="primary" >Repetir nueva contraseña</ion-label>\n\n            <ion-input aria-placeholder="Pass" type="password" [(ngModel)]="txt_rnpass_cambiar"></ion-input>\n\n          </ion-item>\n\n      <div class="div_margen_bt">\n\n        <button class="btn_cambio_password" ion-button full (click)="cambiarP()" [disabled]="!reg_status" >Enviar</button>\n\n        <ion-spinner name="crescent" *ngIf="status" ></ion-spinner>\n\n      </div>\n\n  </div>\n\n  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\cambiar-usuario\cambiar-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_valinterno_valinterno__["a" /* ValinternoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CambiarUsuarioPage);
    return CambiarUsuarioPage;
}());

//# sourceMappingURL=cambiar-usuario.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { ValidacionesComponent } from '../../components/validaciones/validaciones';


var PrincipalAdminPage = /** @class */ (function () {
    function PrincipalAdminPage(navCtrl, navParams, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
    }
    PrincipalAdminPage.prototype.menu = function () {
        var modal = this.modalCtrl.create('ListaAdminPage');
        modal.present();
    };
    PrincipalAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal-admin',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-admin\principal-admin.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Panel de control Administrador</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="menu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <h1 class="centrado">Incidencias pertenece al modulo 4</h1>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Panel de control Administrador</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="menu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <h1 class="centrado">Incidencias pertenece al modulo 4</h1>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-admin\principal-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], PrincipalAdminPage);
    return PrincipalAdminPage;
}());

//# sourceMappingURL=principal-admin.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalMecanicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrincipalMecanicoPage = /** @class */ (function () {
    function PrincipalMecanicoPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    PrincipalMecanicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalMecanicoPage');
    };
    PrincipalMecanicoPage.prototype.menu = function () {
        var modal = this.modalCtrl.create('ListaMecanicoPage');
        modal.present();
    };
    PrincipalMecanicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal-mecanico',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-mecanico\principal-mecanico.html"*/'<!--\n\n  Generated template for the PrincipalMecanicoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n      <ion-title>Panel de control Mecanico</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only color="royal" (click)="menu()">\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-mecanico\principal-mecanico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], PrincipalMecanicoPage);
    return PrincipalMecanicoPage;
}());

//# sourceMappingURL=principal-mecanico.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalTallerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrincipalTallerPage = /** @class */ (function () {
    function PrincipalTallerPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    PrincipalTallerPage.prototype.ionViewDidLoad = function () {
    };
    PrincipalTallerPage.prototype.menu = function () {
        var modal = this.modalCtrl.create('ListaTallerPage');
        modal.present();
    };
    PrincipalTallerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal-taller',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-taller\principal-taller.html"*/'\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <ion-title>Panel de control Taller</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="menu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1 class="centrado">Incidencias pertenece al módulo 4</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-taller\principal-taller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], PrincipalTallerPage);
    return PrincipalTallerPage;
}());

//# sourceMappingURL=principal-taller.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cambiar_usuario_cambiar_usuario__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_valinterno_valinterno__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrincipalUsuarioPage = /** @class */ (function () {
    function PrincipalUsuarioPage(navCtrl, navParams, salir) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.salir = salir;
        this.cambUs = __WEBPACK_IMPORTED_MODULE_0__cambiar_usuario_cambiar_usuario__["a" /* CambiarUsuarioPage */];
    }
    PrincipalUsuarioPage.prototype.logout = function () {
        this.salir.logout();
    };
    PrincipalUsuarioPage.prototype.abrir_cambio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cambiar_usuario_cambiar_usuario__["a" /* CambiarUsuarioPage */]);
    };
    PrincipalUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-principal-usuario',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-usuario\principal-usuario.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Principal usuario</ion-title>\n\n    <ion-buttons end>\n\n      \n\n      <button ion-button icon-only color="royal" (click)="logout()">\n\n        <ion-icon name="exit"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="royal" (click)="abrir_cambio()">\n\n          <ion-icon ios="ios-construct"  md="md-construct"></ion-icon>\n\n        </button>\n\n\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content></ion-content>\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\principal-usuario\principal-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_valinterno_valinterno__["a" /* ValinternoProvider */]])
    ], PrincipalUsuarioPage);
    return PrincipalUsuarioPage;
}());

//# sourceMappingURL=principal-usuario.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map