import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { AndroidPermissions } from '@ionic-native/android-permissions';


/**
 * Generated class for the QrasistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrasistencia',
  templateUrl: 'qrasistencia.html',
})
export class QrasistenciaPage {

  constructor(public navCtrl: NavController,public platform:Platform, public navParams: NavParams, public androidPermissions: AndroidPermissions,public qrScanner: QRScanner) {
    
    // platform.ready().then(()=>{
    //   this.qrscanner();
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrasistenciaPage');
  }

  qrscanner() {
    
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          alert('authorized');

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            alert(text);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            this.navCtrl.pop();
          });

          this.qrScanner.resumePreview();

          // show camera preview
          this.qrScanner.show()
          .then((data : QRScannerStatus)=> { 
            alert(data.showing);
          },err => {
            alert(err);

          });

          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          alert('denied');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          alert('else');
        }
      })
      .catch((e: any) => {
        alert('Error is' + e);
      });

  }
  // leerCodigo () {
  //   // Pedir permiso de utilizar la camara
  //   this.qrScanner.prepare().then((status: QRScannerStatus) => {
  //     if (status.authorized) {
  //       // el permiso fue otorgado
  //       // iniciar el escaneo
  //       let scanSub = this.qrScanner.scan().subscribe((texto: string) => {
  //         console.log('Scanned something', texto);
          
  //         this.qrScanner.hide(); // esconder el preview de la camara
  //         scanSub.unsubscribe(); // terminar el escaneo
  //       }); 
  
  //     } else if (status.denied) {
  //       // el permiso no fue otorgado de forma permanente
  //       // debes usar el metodo QRScanner.openSettings() para enviar el usuario a la pagina de configuracion
  //       // desde ahí podrán otorgar el permiso de nuevo
  //     } else {
  //       // el permiso no fue otorgado de forma temporal. Puedes pedir permiso de en cualquier otro momento
  //     }
  //   }) .catch((e: any) => console.log('El error es: ', e));
  // }

}
