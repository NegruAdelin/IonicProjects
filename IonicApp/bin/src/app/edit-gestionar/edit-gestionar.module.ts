import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGestionarPageRoutingModule } from './edit-gestionar-routing.module';

import { EditGestionarPage } from './edit-gestionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditGestionarPageRoutingModule
  ],
  declarations: [EditGestionarPage]
})
export class EditGestionarPageModule {}
