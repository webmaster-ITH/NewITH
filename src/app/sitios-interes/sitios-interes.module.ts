import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitiosInteresRoutingModule } from './sitios-interes-routing.module';
import { GaleryComponent } from './pages/galery/galery.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CodigoEticaComponent } from './pages/codigo-etica/codigo-etica.component';
import { ContraloresSocialesComponent } from './pages/contralores-sociales/contralores-sociales.component';
import { CiieComponent } from './pages/ciie/ciie.component';
import { MaterialServidoresPublicosComponent } from './pages/material-servidores-publicos/material-servidores-publicos.component';


@NgModule({
  declarations: [
    GaleryComponent,
    CalendarioComponent,
    CodigoEticaComponent,
    ContraloresSocialesComponent,
    CiieComponent,
    MaterialServidoresPublicosComponent
  ],
  imports: [
    CommonModule,
    SitiosInteresRoutingModule
  ]
})
export class SitiosInteresModule { }
