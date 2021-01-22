import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit-gestionar',
  templateUrl: './edit-gestionar.page.html',
  styleUrls: ['./edit-gestionar.page.scss'],
})
export class EditGestionarPage {
  resultDepartment: any;
  gestionar: any;
  inputName: any;
  inputEmail: any;
  inputLastName: any;
  inputDepartment: any;

  constructor(private router: Router, private apiServices: ApiService, private storage: Storage) {}

   ionViewWillEnter(){    
      this.apiServices.getDepartament().subscribe(data => {
        this.resultDepartment = data;
      })
      this.storage.get('gestionar').then( data => {
        this.gestionar = data;
        this.inputEmail = this.gestionar.email_gestionar;
        this.inputName = this.gestionar.name;
        this.inputDepartment = this.gestionar.nume_departament;
        this.inputLastName = this.gestionar.last_name_gestionar;
      });
  }

  submit(){
    this.searchIdDepartament();

    this.gestionar.name_gestionar = this.inputName;
    this.gestionar.last_name_gestionar = this.inputLastName;
    this.gestionar.email_gestionar = this.inputEmail;
    this.gestionar.id_departament = this.inputDepartment[0].id_departament;
    
    this.apiServices.updateGestionar(this.gestionar).subscribe(() => {
    });
    this.router.navigate(['/tabs/tab2']);
  }

   searchIdDepartament(){
    this.inputDepartment = this.resultDepartment.filter(data => {
      return (data.nume_departament.toLowerCase().indexOf(this.inputDepartment.toLowerCase()) > -1);
    });
  }

}
