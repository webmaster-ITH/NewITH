import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunidadRoutingModule } from './comunidad-routing.module';
import { TitulacionComponent } from './pages/titulacion/titulacion.component';


@NgModule({
  declarations: [
    TitulacionComponent
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule
  ]
})
export class ComunidadModule { }
