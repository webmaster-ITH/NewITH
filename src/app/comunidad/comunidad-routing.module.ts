import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulacionComponent } from './pages/titulacion/titulacion.component';
import { EncuestaEgresadosComponent } from './pages/encuesta-egresados/encuesta-egresados.component';
import { EncuestaEmpleadorComponent } from './pages/encuesta-empleador/encuesta-empleador.component';
import { ObituarioComponent } from './pages/obituario/obituario.component';
import { SeguridadTrabajoComponent } from './pages/seguridad-trabajo/seguridad-trabajo.component';
import { ResidenciasComponent } from './pages/residencias/residencias.component';
import { Residencias1Component } from './pages/residencias1/residencias1.component';
import { Residencias2Component } from './pages/residencias2/residencias2.component';
import { Residencias3Component } from './pages/residencias3/residencias3.component';
import { EgresadosComponent } from './pages/egresados/egresados.component';

const routes: Routes = [
  { path: 'titulacion', component: TitulacionComponent },
  { path: 'egresados', component: EncuestaEgresadosComponent },
  { path: 'empleadores', component: EncuestaEmpleadorComponent },
  { path: 'obituario', component: ObituarioComponent },
  { path: 'seguridad-trabajo', component: SeguridadTrabajoComponent },
  { path: 'residencias', component: ResidenciasComponent },
  { path: 'residencias1', component: Residencias1Component },
  { path: 'residencias2', component: Residencias2Component },
  { path: 'residencias3', component: Residencias3Component },
  { path: 'alumnos/egresados', component: EgresadosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunidadRoutingModule { }
