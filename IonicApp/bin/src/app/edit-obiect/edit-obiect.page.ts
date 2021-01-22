import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-obiect',
  templateUrl: './edit-obiect.page.html',
  styleUrls: ['./edit-obiect.page.scss'],
})
export class EditObiectPage {
  obiect: any;
  inputName: any;
  inputDescription: any;
  inputPrice: any;
  inputDate: any;
  inputGestionar: any
  inputDepartment: any;
  inputAddress: any;
  resultDepartment: any;
  
  constructor(private router: Router, private storage: Storage, private apiServices: ApiService) {
    this.apiServices.getDepartament().subscribe(data => {
      this.resultDepartment = data;
    })
  }

  ionViewWillEnter(){
    this.storage.get('item').then( data => {
      this.obiect = data;
      this.inputName = this.obiect.nume_obiect;
      this.inputDescription = this.obiect.descriere_obiect;
      this.inputPrice = this.obiect.pret_obiect;
      this.inputDate = this.obiect.data_achizitiei_obiect;
      this.inputGestionar = this.obiect.nume_gestionar
      this.inputDepartment = this.obiect.nume_departament;
    });
  }

  submit(){
    this.searchIdDepartament();

    this.obiect.nume_obiect = this.inputName;
    this.obiect.descriere_obiect = this.inputDescription;
    this.obiect.pret_obiect = this.inputPrice;
    this.obiect.data_achizitiei_obiect = this.inputDate;
    this.obiect.nume_gestionar = this.inputGestionar;
    this.obiect.id_departament = this.inputDepartment[0].id_departament;
    this.apiServices.updateObiect(this.obiect).subscribe(() => {
    });
    this.router.navigate(['/tabs/tab3']);
  }

  searchIdDepartament(){
    this.inputDepartment = this.resultDepartment.filter(data => {
      return (data.nume_departament.toLowerCase().indexOf(this.inputDepartment.toLowerCase()) > -1);
    });
  }
}
