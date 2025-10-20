import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunidadRoutingModule } from './comunidad-routing.module';
import { TitulacionComponent } from './pages/titulacion/titulacion.component';
import { ResidenciasComponent } from './pages/residencias/residencias.component';
import { ServicioSocialComponent } from './pages/servicio-social/servicio-social.component';
import { ObituarioComponent } from './pages/obituario/obituario.component';
import { SeguridadTrabajoComponent } from './pages/seguridad-trabajo/seguridad-trabajo.component';
import { EncuestaEgresadosComponent } from './pages/encuesta-egresados/encuesta-egresados.component';
import { EncuestaEmpleadorComponent } from './pages/encuesta-empleador/encuesta-empleador.component';
import { Residencias1Component } from './pages/residencias1/residencias1.component';
import { Residencias2Component } from './pages/residencias2/residencias2.component';
import { Residencias3Component } from './pages/residencias3/residencias3.component';
import { EgresadosComponent } from './pages/egresados/egresados.component';


@NgModule({
  declarations: [
    TitulacionComponent,
    ResidenciasComponent,
    ServicioSocialComponent,
    ObituarioComponent,
    SeguridadTrabajoComponent,
    EncuestaEgresadosComponent,
    EncuestaEmpleadorComponent,
    Residencias1Component,
    Residencias2Component,
    Residencias3Component,
    EgresadosComponent
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule
  ]
})
export class ComunidadModule { }
