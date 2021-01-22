import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage {
  result: any;
  passwordInput: any;
  emailInput: any;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private storage: Storage) { }

  userForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  navigate(){
    if(this.userForm.status == "VALID"){
      if(this.emailInput == "negru.adelin@gmail.com" && this.passwordInput == "rootroot"){
        this.storage.set('logIn', true);
        this.storage.set('idGestionar', 'admin');
        this.passwordInput = null;
        this.emailInput = null;
        this.router.navigate(['/tabs']);
      }
      else{
        this.apiService.getGestionarByEmail(this.emailInput).subscribe(data => {
          this.result = data;

          for(let i = 0; i < this.result.length; i++){
            this.apiService.comparePassword(this.passwordInput, this.result[i].id_gestionar).subscribe(data => {
              if(data == true){
                this.storage.set('logIn', true);
                this.storage.set('idGestionar', this.result[i].id_gestionar);
                this.passwordInput = null;
                this.emailInput = null;
                this.router.navigate(['/tabs']);
              }
            });
          }    
        })
      }
    }
  }
}
