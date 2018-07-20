webpackJsonp([5],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModificarTallerPageModule", function() { return AdminModificarTallerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_modificar_taller__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminModificarTallerPageModule = /** @class */ (function () {
    function AdminModificarTallerPageModule() {
    }
    AdminModificarTallerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_modificar_taller__["a" /* AdminModificarTallerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_modificar_taller__["a" /* AdminModificarTallerPage */]),
            ],
        })
    ], AdminModificarTallerPageModule);
    return AdminModificarTallerPageModule;
}());

//# sourceMappingURL=admin-modificar-taller.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModificarTallerPage; });
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






var AdminModificarTallerPage = /** @class */ (function () {
    function AdminModificarTallerPage(navCtrl, navParams, alertCtrl, validar, imagePicker, http, modalCtrl, geolocation) {
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
    AdminModificarTallerPage.prototype.ionViewDidLoad = function () {
        this.nombre = this.navParams.get('nombre');
        this.picToView = this.navParams.get('imagen');
        var ubicacion = this.navParams.get('ubicacion');
        this.txt_taller_ubicacion = ubicacion[0] + "; " + ubicacion[1];
        this.txt_taller_nombre = this.nombre;
        this.txt_taller_descripcion = this.navParams.get('descripcion');
        this.txt_taller_mail = this.navParams.get('mail');
        this.txt_taller_identidad = this.navParams.get('identidad');
    };
    AdminModificarTallerPage.prototype.escogerLogotipo = function () {
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
    AdminModificarTallerPage.prototype.toDataUrl = function (url, callback) {
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
    AdminModificarTallerPage.prototype.ubicar = function () {
        var _this = this;
        var modal_mapa = this.modalCtrl.create('MapaObtenerPage', { puntos: this.txt_taller_ubicacion });
        modal_mapa.onDidDismiss(function (punto) { _this.txt_taller_ubicacion = punto.coordenadas; });
        modal_mapa.present();
    };
    AdminModificarTallerPage.prototype.guardarTaller = function () {
        var nombre = this.txt_taller_nombre;
        var descripcion = this.txt_taller_descripcion;
        var mail = this.txt_taller_mail;
        if (!this.validar.validar_vacios([nombre, descripcion, mail])) {
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
        this.completarRegistro(this.txt_taller_logo, this.txt_taller_ubicacion, nombre, descripcion, mail);
    };
    AdminModificarTallerPage.prototype.completarRegistro = function (imagen, ubicacion, nombre, descripcion, mail) {
        var _this = this;
        this.reg_status = false;
        this.status = true;
        var postdata = new FormData();
        postdata.append('identidad', this.txt_taller_identidad);
        postdata.append('logotipo', imagen);
        postdata.append('ubicacion', ubicacion);
        postdata.append('nombre', nombre);
        postdata.append('descripcion', descripcion);
        postdata.append('mail', mail);
        this.http.modificarTaller(postdata).subscribe(function (data) {
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
                subTitle: error.text(),
                buttons: ['Aceptar']
            }).present();
            _this.reg_status = true;
            _this.status = false;
        });
    };
    AdminModificarTallerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-modificar-taller',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-modificar-taller\admin-modificar-taller.html"*/'<!--\n  Generated template for the AdminModificarTallerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{this.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n \n<ion-content padding>\n  <div class="centrado">\n    <h1>Modificación del taller</h1>\n    <ion-img height="110px" width="100px" (click)="escogerLogotipo()" [src]="picToView"></ion-img>\n    <ion-input style="display: none" type="text" [(ngModel)]="txt_taller_logo"></ion-input>\n    <p>Click en la imágen para escoger logotipo</p>\n    <ion-item class="centrado">\n      <div (click)="ubicar()">\n        <label for="">Click aqui para escoger su ubicación</label>\n        <p>{{txt_taller_ubicacion}}</p>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Nombre del taller</ion-label>\n      <ion-input aria-placeholder="Nombre" type="text" [(ngModel)]="txt_taller_nombre"></ion-input>\n      <ion-input style="display: none" aria-placeholder="identidad" type="text" [(ngModel)]="txt_taller_identidad"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Descripción del taller</ion-label>\n      <ion-textarea maxlenght="100" aria-placeholder="Nombre" type="text" [(ngModel)]="txt_taller_descripcion"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input aria-placeholder="Email" type="email" [(ngModel)]="txt_taller_mail"></ion-input>\n    </ion-item>\n    <button style="margin-top:12px" ion-button (click)="guardarTaller()" [disabled]="!reg_status">Guardar</button>\n    <ion-spinner name="crescent" *ngIf="status"></ion-spinner>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v8\mecanico\src\pages\admin-modificar-taller\admin-modificar-taller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AdminModificarTallerPage);
    return AdminModificarTallerPage;
}());

//# sourceMappingURL=admin-modificar-taller.js.map

/***/ })

});
//# sourceMappingURL=5.js.map