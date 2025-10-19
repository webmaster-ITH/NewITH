import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricaComponent } from './electrica/electrica.component';
import { HomeComponent } from './maestria/components/home/home.component';
import { AdminComponent } from './maestria/admin/admin.component';
import { ObjetivoComponent } from './maestria/components/objetivo/objetivo.component';

const routes: Routes = [
  {path:'',
    children: [
      { path: 'Electrica', component: ElectricaComponent },
      { path:'Maestria-Admin', component: AdminComponent},
      { path:'Objetivos', component: ObjetivoComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertaEducativaRoutingModule { }
