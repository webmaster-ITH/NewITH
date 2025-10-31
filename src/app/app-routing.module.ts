import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NotaComponent } from './page/nota/nota.component';
import { ConvocatoriasComponent } from './page/convocatorias/convocatorias.component';
import { IsoComponent } from './pages/iso/iso.component';
import { U079Component } from './pages/u079/u079.component';
import { SGIGComponent } from './pages/sgig/sgig.component';
import { VideosComponent } from './pages/videos/videos.component';
import { NotasOldComponent } from './pages/notas-old/notas-old.component';
import { CapacitacionMicrosoftComponent } from './page/convocatorias/component/capacitacion-microsoft/capacitacion-microsoft.component';
import { PromocionDocentesComponent } from './page/convocatorias/component/promocion-docentes/promocion-docentes.component';
import { ApoyoMadresComponent } from './page/convocatorias/component/apoyo-madres/apoyo-madres.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'noticia/:id', component: NotaComponent },
  { path: 'convocatorias', component: ConvocatoriasComponent },
  { path: 'Capacitacion-Microsft-Teams', component: CapacitacionMicrosoftComponent },
  { path: 'Promocion-Docente', component: PromocionDocentesComponent },
  { path: 'Apoyo-Madres-Familia', component: ApoyoMadresComponent },
  { path: 'Archivero', component: NotasOldComponent },
  { path: 'iso', component: IsoComponent },
  { path: 'U079', component: U079Component },
  { path: 'Videos', component: VideosComponent },
  { path: 'SGIG', component: SGIGComponent },
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
