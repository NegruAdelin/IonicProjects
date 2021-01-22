import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httplink = "http://c6e711baa311.ngrok.io";
  constructor(private http: HttpClient) { }

  deleteObiect(id){
    return this.http.get(this.httplink + '/obiecte/delete/' + id);
  }

  deleteGestionar(id){
    console.log(this.httplink + '/gestionari/delete/' + id)
    return this.http.get(this.httplink + '/gestionari/delete/' + id);
  }

  getAllObiecte(){
    return this.http.get(this.httplink + '/obiecte');
  }

  getAllGestionari(){
    return this.http.get(this.httplink + '/gestionari');
  }

  getDepartament(){
    return this.http.get(this.httplink + '/departamente');
  }

  getDepartamentById(id_departament){
    return this.http.get(this.httplink + '/departamente/' + id_departament);
  }

  getGestionarById(id_gestionar){
    return this.http.get(this.httplink + '/gestionari/' + id_gestionar);
  }

  getObiectById(id_obiect){
    return this.http.get(this.httplink + '/obiecte/' + id_obiect);
  }

  getGestionarByEmail(email_gestionar){
    return this.http.get(this.httplink + '/gestionari/email/' + email_gestionar);
  }

  comparePassword(inputPass, id){
    return this.http.get(this.httplink + '/comparePassword/' + inputPass + '&' + id);
  }

  createGestionar(dataToSend){
    return this.http.post(this.httplink + '/gestionar_create', dataToSend, 
      {
        headers: { 
          'Content-Type':  'application/json'
        }
      }
    )
  }

  updateObiect(dataToSend){
    return this.http.post(this.httplink + '/obiecte/update_obiect', dataToSend, 
    {
      headers: { 
        'Content-Type':  'application/json'
      }
    })
  }

  updateGestionar(dataToSend){
    return this.http.post(this.httplink + '/update_gestionar', dataToSend, 
    {
      headers: { 
        'Content-Type':  'application/json'
      }
    })
  }  
}
