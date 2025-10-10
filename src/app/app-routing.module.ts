import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NotaComponent } from './page/nota/nota.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'noticia/:id', component: NotaComponent },
  {
    path: 'institucion', loadChildren: () => import('./institucion/institucion.module').then(m => m.InstitucionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
