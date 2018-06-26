import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController, AlertController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-mapa-obtener',
  templateUrl: 'mapa-obtener.html',
})
export class MapaObtenerPage {
  @ViewChild("map") mapElement;
  map:any;
  marker:any;
  geoposicion: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,
    private validar: ValidacionesProvider,
    private viewCtrl: ViewController
  ) {
    this.geoposicion='0,0'
  }
  ionViewDidLoad(){
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp_geo) => {
      var coords= new google.maps.LatLng(resp_geo.coords.latitude,resp_geo.coords.longitude)
      this.geoposicion=resp_geo.coords.latitude+" ; "+resp_geo.coords.longitude
      this.map= new google.maps.Map(this.mapElement.nativeElement, {
        center: coords,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl:false,
        streetViewControl:false
      })
      this.cambioUbicacion(coords)
      this.map.addListener('click', (event)=>{
        coords=new google.maps.LatLng(event.latLng.lat(),event.latLng.lng())
        this.geoposicion=event.latLng.lat()+" ; "+event.latLng.lng() 
        this.marker.setMap(null)
        this.cambioUbicacion(coords)
      })
    }).catch(error=>{
      this.geoposicion='0.0; 0.0'
      this.alertCtrl.create({
        title: this.validar.mensajes('E6').t,
        subTitle: this.validar.mensajes('E6').d,
        buttons: [{
          text: 'Aceptar',
          role: 'cancel',
          handler: data => {
            this.navCtrl.popToRoot()
          }
        }]
      }).present();
    })
  }
  cambioUbicacion(coordenadas){
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: coordenadas
    });
  }
  dismiss() {
      this.viewCtrl.dismiss(
        {coordenadas: this.geoposicion}
      );
    }
}
