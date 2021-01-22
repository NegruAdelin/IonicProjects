import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nameInput: any;
  lastNameInput: any;
  passwordInput: any;
  emailInput: any;
  departamentInput: any;
  rePasswordInput: any;
  msg: any;

  constructor(private formBuilder: FormBuilder, private apiServices: ApiService, private router: Router) { }

  userForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    id: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  });

  fieldsAreNull(){
    if(this.nameInput && this.lastNameInput && this.passwordInput && this.emailInput && this.departamentInput)
      return false;
    else
      return true;
  }

  submit(){
    if(this.userForm.status == "VALID"){
      let dataToSend ={
        nameInput: this.nameInput,
        lastNameInput: this.lastNameInput,
        passwordInput: this.passwordInput,
        emailInput: this.emailInput,
        departmentInput: this.departamentInput,
      };
      
      if(this.rePasswordInput == this.passwordInput && this.fieldsAreNull() == false){
        this.apiServices.createGestionar(dataToSend).subscribe(() => {      
          this.msg = "You will be redirected to the Log In page in 2s";
          setTimeout(() => { 
            this.msg = "";
            this.router.navigate(['log-in']);
          }, 2000)
        
        });
      }
    }
  }

}
