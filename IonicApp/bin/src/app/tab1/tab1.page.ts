import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  qrData = "1";
  scannedCode = null;
  elementType = 'canvas';
  result: any;
  resultGestionar: any;
  resultDepartament: any;

  constructor(private barcodeScanner: BarcodeScanner, private apiService: ApiService,
     private router: Router, private storage: Storage) {
       this.storage.get('logIn').then(value => {
         if(value != true){
           this.router.navigate(['']);
         }
       })
     }
    
    ionViewWillEnter(){
      this.scanCode();
    }

    ionViewWillLeave(){
      this.result = null;
      this.resultGestionar = null;
      this.resultDepartament = null;
    }


    scanCode(){
      this.barcodeScanner.scan().then(barcodeData => {
          this.scannedCode = barcodeData.text;

          this.apiService.getObiectById(this.scannedCode).subscribe(data => {
            this.result = data;

            this.apiService.getDepartamentById(this.result.id_departament).subscribe(data => {
              this.resultDepartament = data; 
            });
      
            this.apiService.getGestionarById(this.result.id_gestionar).subscribe(data => {
              this.resultGestionar = data;
            });
          });
      });  
    }
}
