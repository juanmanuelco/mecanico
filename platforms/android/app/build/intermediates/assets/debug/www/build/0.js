webpackJsonp([0],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaObtenerPageModule", function() { return MapaObtenerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_obtener__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapaObtenerPageModule = /** @class */ (function () {
    function MapaObtenerPageModule() {
    }
    MapaObtenerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mapa_obtener__["a" /* MapaObtenerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mapa_obtener__["a" /* MapaObtenerPage */]),
            ],
        })
    ], MapaObtenerPageModule);
    return MapaObtenerPageModule;
}());

//# sourceMappingURL=mapa-obtener.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaObtenerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapaObtenerPage = /** @class */ (function () {
    function MapaObtenerPage(navCtrl, navParams, geolocation, alertCtrl, validar, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.validar = validar;
        this.viewCtrl = viewCtrl;
        this.geoposicion = '0,0';
    }
    MapaObtenerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp_geo) {
            var coords = new google.maps.LatLng(resp_geo.coords.latitude, resp_geo.coords.longitude);
            _this.geoposicion = resp_geo.coords.latitude + " ; " + resp_geo.coords.longitude;
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                center: coords,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                fullscreenControl: false,
                streetViewControl: false
            });
            _this.cambioUbicacion(coords);
            _this.map.addListener('click', function (event) {
                coords = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());
                _this.geoposicion = event.latLng.lat() + " ; " + event.latLng.lng();
                _this.marker.setMap(null);
                _this.cambioUbicacion(coords);
            });
        }).catch(function (error) {
            _this.geoposicion = '0.0; 0.0';
            _this.alertCtrl.create({
                title: _this.validar.mensajes('E6').t,
                subTitle: _this.validar.mensajes('E6').d,
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        handler: function (data) {
                            _this.navCtrl.popToRoot();
                        }
                    }]
            }).present();
        });
    };
    MapaObtenerPage.prototype.cambioUbicacion = function (coordenadas) {
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.BOUNCE,
            position: coordenadas
        });
    };
    MapaObtenerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ coordenadas: this.geoposicion });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", Object)
    ], MapaObtenerPage.prototype, "mapElement", void 0);
    MapaObtenerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa-obtener',template:/*ion-inline-start:"D:\proyectos\mecanico\mecanico_app_v7\mecanico\src\pages\mapa-obtener\mapa-obtener.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Seleccione su ubicación</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="centrado">\n  <label for="" class="centrado">Elija la ubicación del taller y de en aceptar</label>\n  <button ion-button (click)="dismiss()">Aceptar</button>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"D:\proyectos\mecanico\mecanico_app_v7\mecanico\src\pages\mapa-obtener\mapa-obtener.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validaciones_validaciones__["a" /* ValidacionesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], MapaObtenerPage);
    return MapaObtenerPage;
}());

//# sourceMappingURL=mapa-obtener.js.map

/***/ })

});
//# sourceMappingURL=0.js.map