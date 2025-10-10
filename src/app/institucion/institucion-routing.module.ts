import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from '../page/direccion/direccion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'Direccion', component: DireccionComponent},
      {path: '**', redirectTo: 'Direccion'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionRoutingModule { }
