import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionRoutingModule } from './institucion-routing.module';
import { DireccionComponent } from './pages/direccion/direccion.component';


@NgModule({
  declarations: [
    DireccionComponent
  ],
  imports: [
    CommonModule,
    InstitucionRoutingModule
  ]
})
export class InstitucionModule { }
