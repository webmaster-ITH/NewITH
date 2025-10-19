import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulacionComponent } from './pages/titulacion/titulacion.component';

const routes: Routes = [
  { path: 'titulacion', component: TitulacionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunidadRoutingModule { }
