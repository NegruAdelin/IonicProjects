import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGestionarPage } from './edit-gestionar.page';

const routes: Routes = [
  {
    path: '',
    component: EditGestionarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGestionarPageRoutingModule {}
