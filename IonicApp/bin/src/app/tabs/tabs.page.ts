import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private storage: Storage, private router: Router) {}

  logOut(){
    this.storage.remove('idGestionar').then(() => {
      this.storage.remove('logIn').then(() => {
        this.router.navigate(['']);
      })
   })
  }

}
