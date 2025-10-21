import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacidadRoutingModule } from './privacidad-routing.module';
import { InfografiaComponent } from './pages/infografia/infografia.component';


@NgModule({
  declarations: [
    InfografiaComponent
  ],
  imports: [
    CommonModule,
    PrivacidadRoutingModule
  ]
})
export class PrivacidadModule { }
