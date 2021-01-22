import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditObiectPage } from './edit-obiect.page';

const routes: Routes = [
  {
    path: '',
    component: EditObiectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditObiectPageRoutingModule {}
