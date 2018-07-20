import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker'
import { ValidacionesProvider } from '../../providers/validaciones/validaciones';
import { HttpProvider } from '../../providers/http/http';


@IonicPage()
@Component({
    selector: 'page-admin-registro-proveedor',
    templateUrl: 'admin-registro-proveedor.html',
})
export class AdminRegistroProveedorPage {
    picToView: "assets/imgs/proveedor.png"
    reg_status
    status
    txt_proveedor_mail_paypal
    txt_proveedor_numero_cuenta
    txt_proveedor_nombre
    txt_proveedor_descripcion
    txt_proveedor_mail
    txt_proveedor_password
    txt_proveedor_logo
    txt_proveedor_rpassword

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        private validar: ValidacionesProvider,
        private imagePicker: ImagePicker,
        private http: HttpProvider,
        public modalCtrl: ModalController
    ) {
        this.reg_status = true
        this.status = false
        this.txt_proveedor_mail_paypal = ""
        this.txt_proveedor_numero_cuenta = ""
    }

    ionViewDidLoad() {
        this.picToView = "assets/imgs/proveedor.png"
    }
    escogerLogotipo() {
        this.imagePicker.getPictures({ maximumImagesCount: 1 }).then((results) => {
            this.picToView = results[0]
            this.toDataUrl(this.picToView, (myBase64) => {
                this.txt_proveedor_logo = myBase64.toString()
            });
        }, (err) => {
            this.alertCtrl.create({
                title: this.validar.mensajes('E12').t,
                subTitle: this.validar.mensajes('E12').d,
                buttons: ['Aceptar']
            }).present();
        });
    }
    toDataUrl(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            var reader = new FileReader();
            reader.onloadend = () => { callback(reader.result) }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
    guardarProveedor() {
        var nombre = this.txt_proveedor_nombre
        var descripcion = this.txt_proveedor_descripcion
        var mail = this.txt_proveedor_mail
        var pass = this.txt_proveedor_password
        var rpass = this.txt_proveedor_rpassword
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
        this.completarRegistro()
    }
    completarRegistro() {
        this.reg_status = false
        this.status = true
        var postdata = new FormData()
        postdata.append('logotipo', this.txt_proveedor_logo)
        postdata.append('nombre', this.txt_proveedor_nombre)
        postdata.append('descripcion', this.txt_proveedor_descripcion)
        postdata.append('mail', this.txt_proveedor_mail)
        postdata.append('pass', this.txt_proveedor_password)
        postdata.append('paypal', this.txt_proveedor_mail_paypal)
        postdata.append('cuenta', this.txt_proveedor_numero_cuenta)
        this.http.registrarProveedor(postdata).subscribe((data) => {
            var resultado = this.validar.mensajes(data.text()).t
            if (resultado == 'Listo') {
                this.alertCtrl.create({
                    title: 'Cuenta registrada con éxito',
                    subTitle: 'Ahora se puede iniciar sesión',
                    buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        handler: data => { this.navCtrl.popToRoot() }
                    }]
                }).present();
            } else {
                this.alertCtrl.create({
                    title: "Error",
                    subTitle: "Esta imágen pesa demasiado, no se puede guardar",
                    buttons: ['Aceptar']
                }).present();
            }
            this.reg_status = true
            this.status = false
        }, (error) => {
            this.alertCtrl.create({
                title: 'Error',
                subTitle: error.text(),
                buttons: ['Aceptar']
            }).present();
            this.reg_status = true
            this.status = false
        })
    }
}
