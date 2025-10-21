import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NotaComponent } from './page/nota/nota.component';
import { ConvocatoriasComponent } from './page/convocatorias/convocatorias.component';
import { IsoComponent } from './pages/iso/iso.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'noticia/:id', component: NotaComponent },
  { path: 'convocatorias', component: ConvocatoriasComponent },
  { path: 'iso', component: IsoComponent },
  { path: 'oferta-educativa', loadChildren: () => import('./oferta-educativa/oferta-educativa.module').then(m => m.OfertaEducativaModule) },
  { path: 'comunidad', loadChildren: () => import('./comunidad/comunidad.module').then(m => m.ComunidadModule) },
  { path: 'privacidad', loadChildren: () => import('./privacidad/privacidad.module').then(m => m.PrivacidadModule) },
  { path: 'Sitios', loadChildren: () => import('./sitios-interes/sitios-interes.module').then(m => m.SitiosInteresModule) },
  {
    path: 'institucion', loadChildren: () => import('./institucion/institucion.module').then(m => m.InstitucionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
