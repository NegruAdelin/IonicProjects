import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditObiectPageRoutingModule } from './edit-obiect-routing.module';

import { EditObiectPage } from './edit-obiect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditObiectPageRoutingModule
  ],
  declarations: [EditObiectPage]
})
export class EditObiectPageModule {}
