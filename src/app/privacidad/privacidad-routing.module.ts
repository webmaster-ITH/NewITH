import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfografiaComponent } from './pages/infografia/infografia.component';

const routes: Routes = [
  { path: 'info', component: InfografiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacidadRoutingModule { }
