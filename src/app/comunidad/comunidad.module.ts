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


@NgModule({
  declarations: [
    TitulacionComponent,
    ResidenciasComponent,
    ServicioSocialComponent,
    ObituarioComponent,
    SeguridadTrabajoComponent,
    EncuestaEgresadosComponent,
    EncuestaEmpleadorComponent
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule
  ]
})
export class ComunidadModule { }
