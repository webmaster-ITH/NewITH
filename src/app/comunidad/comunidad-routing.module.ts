import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulacionComponent } from './pages/titulacion/titulacion.component';
import { EncuestaEgresadosComponent } from './pages/encuesta-egresados/encuesta-egresados.component';
import { EncuestaEmpleadorComponent } from './pages/encuesta-empleador/encuesta-empleador.component';
import { ObituarioComponent } from './pages/obituario/obituario.component';
import { SeguridadTrabajoComponent } from './pages/seguridad-trabajo/seguridad-trabajo.component';

const routes: Routes = [
  { path: 'titulacion', component: TitulacionComponent },
  { path: 'egresados', component: EncuestaEgresadosComponent },
  { path: 'empleadores', component: EncuestaEmpleadorComponent },
  { path: 'obituario', component: ObituarioComponent },
  { path: 'seguridad-trabajo', component: SeguridadTrabajoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunidadRoutingModule { }
