webpackJsonp([6],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModificarProveedorPageModule", function() { return AdminModificarProveedorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_modificar_proveedor__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminModificarProveedorPageModule = /** @class */ (function () {
    function AdminModificarProveedorPageModule() {
    }
    AdminModificarProveedorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_modificar_proveedor__["a" /* AdminModificarProveedorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_modificar_proveedor__["a" /* AdminModificarProveedorPage */]),
            ],
        })
    ], AdminModificarProveedorPageModule);
    return AdminModificarProveedorPageModule;
}());

//# sourceMappingURL=admin-modificar-proveedor.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModificarProveedorPage; });
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





var AdminModificarProveedorPage = /** @class */ (function () {
    function AdminModificarProveedorPage(navCtrl, navParams, alertCtrl, validar, imagePicker, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.validar = validar;
        this.imagePicker = imagePicker;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.txt_proveedor_mail_paypal = "";
        this.reg_status = true;
        this.status = false;
    }
    AdminModificarProveedorPage.prototype.ionViewDidLoad = function () {
        this.nombre = this.navParams.get('nombre');
        this.picToView = this.navParams.get('imagen');
        this.txt_proveedor_nombre = this.nombre;
        this.txt_proveedor_descripcion = this.navParams.get('descripcion');
        this.txt_proveedor_mail = this.navParams.get('mail');
        this.txt_proveedor_identidad = this.navParams.get('identidad');
        this.txt_proveedor_mail_paypal = this.navParams.get('paypal');
        this.txt_proveedor_numero_cuenta = this.navParams.get('cuenta');
    };
    AdminModificarProveedorPage.prototype.escogerLogotipo = function () {
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
    AdminModificarProveedorPage.prototype.toDataUrl = function (url, callback) {
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
    AdminModificarProveedorPage.prototype.guardarProveedor = function () {
        var nombre = this.txt_proveedor_nombre;
        var descripcion = this.txt_proveedor_descripcion;
        var mail = this.txt_proveedor_mail;
        var paypal = (this.txt_proveedor_mail_paypal).trim();
        var cuenta = this.txt_proveedor_numero_cuenta;
        if (!this.validar.validar_vacios([nombre, descripcion, mail])) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E1').t,
                subTitle: this.validar.mensajes('E1').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        var cap = false;
        if (paypal.length > 2) {
            if (this.validar.validar_correo(paypal)) {
                this.alertCtrl.create({
                    title: this.validar.mensajes('E2').t,
                    subTitle: this.validar.mensajes('E2').d,
                    buttons: ['Aceptar']
                }).present();
                return;
            }
        }
        if (this.validar.validar_correo(mail)) {
            this.alertCtrl.create({
                title: this.validar.mensajes('E2').t,
                subTitle: this.validar.mensajes('E2').d,
                buttons: ['Aceptar']
            }).present();
            return;
        }
        this.completarModificacion();
    };
    AdminModificarProveedorPage.prototype.completarModificacion = function () {
        var _this = this;
        this.reg_status = false;
        this.status = true;
        var postdata = new FormData();
        postdata.append('identidad', this.txt_proveedor_identidad);
        postdata.append('logotipo', this.txt_proveedor_logo);
        postdata.append('nombre', this.txt_proveedor_nombre);
        postdata.append('descripcion', this.txt_proveedor_descripcion);
        postdata.append('mail', this.txt_proveedor_mail);
        postdata.append('paypal', this.txt_proveedor_mail_paypal);
        postdata.append('cuenta', this.txt_proveedor_numero_cuenta);
        this.http.modificarProveedor(postdata).subscribe(function (data) {
            var resultado = _this.validar.mensajes(data.text()).t;
            if (resultado == 'Listo') {
                _this.alertCtrl.create({
                    title: 'Taller actualizado',
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
                    subTitle: "Esta imágen es muy pesada",
                    buttons: ['Aceptar']
                }).present();
            }
            _this.reg_status = true;
            _this.status = false;
        }, function (error) {
            _this.alertCtrl.create({
                title: 'Error',
                subTitle: error.toString(),
                buttons: ['Aceptar']
            }).present();
            _this.reg_status = true;
            _this.status = false;
        });
    };
    AdminModificarProveedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-modificar-proveedor',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-modificar-proveedor\admin-modificar-proveedor.html"*/'\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{this.nombre}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    <div class="centrado">\n      <h1>Modificación del proveedor</h1>\n      <ion-img height="110px" width="100px" (click)="escogerLogotipo()" [src]="picToView"></ion-img>\n      <ion-input style="display: none" type="text" [(ngModel)]="txt_proveedor_logo"></ion-input>\n      <p>Click en la imágen para escoger logotipo</p>\n      <ion-item>\n        <ion-label color="primary" floating>Nombre del proveedor</ion-label>\n        <ion-input aria-placeholder="Nombre" type="text" [(ngModel)]="txt_proveedor_nombre"></ion-input>\n        <ion-input style="display: none" aria-placeholder="identidad" type="text" [(ngModel)]="txt_proveedor_identidad"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Descripción del proveedor</ion-label>\n        <ion-textarea maxlenght="100" aria-placeholder="Nombre" type="text" [(ngModel)]="txt_proveedor_descripcion"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Email</ion-label>\n        <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_proveedor_mail"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color="primary" floating>Email paypal (opcional)</ion-label>\n          <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_proveedor_mail_paypal"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>Cuenta bancaria(opcional)</ion-label>\n            <ion-input aria-placeholder="Número" type="number" [(ngModel)]="txt_proveedor_numero_cuenta"></ion-input>\n          </ion-item>\n      <button style="margin-top:12px" ion-button (click)="guardarProveedor()" [disabled]="!reg_status">Guardar</button>\n      <ion-spinner name="crescent" *ngIf="status"></ion-spinner>\n    </div>\n  </ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-modificar-proveedor\admin-modificar-proveedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AdminModificarProveedorPage);
    return AdminModificarProveedorPage;
}());

//# sourceMappingURL=admin-modificar-proveedor.js.map

/***/ })

});
//# sourceMappingURL=6.js.map