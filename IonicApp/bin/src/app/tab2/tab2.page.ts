import { Component } from '@angular/core';
import { ApiService } from '../api.service'
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  resultsGestionari: any;
  avatar:  any = ["bear", "avatar", "duck", "rabbit", "lion", "kitten", "puppy", "cheetah", "eagle", "mouse"];
  searchBy: any = 'Name';
  mySearchBarInput: any;
  filterData: any;
  storageIdGestionar: any;
  auxVar: any;

  constructor(private apiService: ApiService, private storage: Storage, private router: Router) { }

  ionViewWillEnter(){
    this.storage.get('logIn').then(val => {
      if(val == true){
        this.apiService.getAllGestionari().subscribe(data => {
          this.resultsGestionari = data;
          for(let i = 0; i < this.resultsGestionari.length; i++){
            this.resultsGestionari[i].name = this.resultsGestionari[i].name_gestionar;
            this.resultsGestionari[i].name_gestionar += ' ' + this.resultsGestionari[i].last_name_gestionar;
            this.apiService.getDepartamentById(this.resultsGestionari[i].id_departament).subscribe(data => { 
              try{
                this.auxVar = data;
                this.resultsGestionari[i].nume_departament = this.auxVar.nume_departament;
                this.resultsGestionari[i].adresa_departament = this.auxVar.adresa_departament;
              }catch (e){
                console.log(e);
              }
            });
          }
          this.atribution();
        })
        this.storage.get('idGestionar').then(value => {
          this.storageIdGestionar = value;
        })
      }
      else{
        this.router.navigate(['']);
      }
    })
  }

  onRefresh(event){
    this.apiService.getAllGestionari().subscribe(async data => {
      this.resultsGestionari = await data;
      for(let i = 0; i < this.resultsGestionari.length; i++){
        this.resultsGestionari[i].name = this.resultsGestionari[i].name_gestionar;
        this.resultsGestionari[i].name_gestionar += ' ' + this.resultsGestionari[i].last_name_gestionar;
        this.apiService.getDepartamentById(this.resultsGestionari[i].id_departament).subscribe(data => { 
          try{
            this.auxVar = data;
            this.resultsGestionari[i].nume_departament = this.auxVar.nume_departament;
            this.resultsGestionari[i].adresa_departament = this.auxVar.adresa_departament;
          }catch (e){
            console.log(e);
          }
        });
      }
      this.atribution();
      event.target.complete();
    })
  }

  ionViewWillLeave(){
    this.storageIdGestionar = null;
  }

  delete(gestionar){
    this.apiService.deleteGestionar(gestionar.id_gestionar).subscribe(() => {
    })
  }

  atribution(){
    this.filterData = this.resultsGestionari;
  }

  edit(gestionar){
    this.storage.set('gestionar', gestionar);
    this.router.navigate(['/edit-gestionar']);
  }

  search(event){
    this.atribution();
    const searchTerm = event.srcElement.value;
    this.filterData = this.filterData.filter(data => {

      switch(this.searchBy){
        case 'Name':{
          if (data.name_gestionar) {
            return (data.name_gestionar.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          }
        }
        break;

        case 'Email':{
          if (data.email_gestionar) {
            return (data.email_gestionar.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          }
        }
        break;

        case 'Department':{ 
          if (data.nume_departament) {
            return (data.nume_departament.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          }
        }
        break;

        case 'Address':{
          if (data.adresa_departament) {
            return (data.adresa_departament.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          }
        }
        break;
      }
    });
  }
}
