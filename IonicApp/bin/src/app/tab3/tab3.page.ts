import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  results: any;
  resultsDepartamente: any = [];
  resultsGestionari: any = [];
  searchBy: any = "Name";
  filterData: any;
  storageIdGestionar: any;
  auxVar: any;

  constructor(private apiService: ApiService, private router: Router, private storage: Storage) { }

  ionViewWillLeave(){
    this.storageIdGestionar = null;
  }
  
  ionViewWillEnter(){
    this.storage.get('logIn').then(val => {
      if(val == true){
        this.apiService.getAllObiecte().subscribe(data => {
          this.results = data;
          for(let i = 0; i < this.results.length; i++){
            this.results[i].pret_obiect = this.results[i].pret_obiect.toString();
            this.apiService.getDepartamentById(this.results[i].id_departament).subscribe(data => {
              this.auxVar = data;
              this.results[i].nume_departament = this.auxVar.nume_departament;
              this.results[i].adresa_departament = this.auxVar.adresa_departament;
            })
            this.apiService.getGestionarById(this.results[i].id_gestionar).subscribe(data => {
              this.auxVar = data;
              this.results[i].nume_gestionar = this.auxVar.name_gestionar + ' ' + this.auxVar.last_name_gestionar;
            })
          }
          this.atribution();
        }) 
        this.storage.get('idGestionar').then(value => {
          this.storageIdGestionar = value;
        });
      }
      else{
        this.router.navigate(['']);
      }
    })
  }

  onRefresh(event){
    this.apiService.getAllObiecte().subscribe(async data => {
      this.results = await data;
    
      for(let i = 0; i < this.results.length; i++){
        this.results[i].pret_obiect = this.results[i].pret_obiect.toString();
        this.apiService.getDepartamentById(this.results[i].id_departament).subscribe(data => {
          this.auxVar = data;
          this.results[i].nume_departament = this.auxVar.nume_departament;
          this.results[i].adresa_departament = this.auxVar.adresa_departament;
        })
        this.apiService.getGestionarById(this.results[i].id_gestionar).subscribe(data => {
          this.auxVar = data;
          this.results[i].nume_gestionar = this.auxVar.name_gestionar + ' ' + this.auxVar.last_name_gestionar;
        })
      }
      this.atribution();
      event.target.complete();
     
    }) 
  }

  atribution(){
    this.filterData = this.results;
  }

  edit(item){
    this.storage.set('item', item);
    this.router.navigate(['/edit-obiect']);
  }

  delete(item){
    this.apiService.deleteObiect(item.id_obiect).subscribe(() => {
    });
  }
  
  search(event) {
    this.atribution();
    const searchTerm = event.srcElement.value;

    this.filterData = this.filterData.filter(data => {
      switch(this.searchBy){
        case 'Name':{
          if (data.nume_obiect) {
            return (data.nume_obiect.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          }
        }
        break;

        case 'Administrator':{
          if (data.nume_gestionar) {
            return (data.nume_gestionar.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          }
        }
        break;

        case 'Department':{ 
          if (data.nume_departament) {
            return (data.nume_departament.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          }
        }
        break;

        case 'Date':{
          if (data.data_achizitiei_obiect) {
            return (data.data_achizitiei_obiect.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          }
        }
        break;

        case 'Price':{
          if (data.pret_obiect) {
            return (data.pret_obiect.indexOf(searchTerm) > -1);
          }
        }
        break;
      }
    });
  }
}
