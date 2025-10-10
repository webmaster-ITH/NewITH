import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionRoutingModule } from './institucion-routing.module';
import { DireccionComponent } from './pages/direccion/direccion.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { FilosofiaComponent } from './pages/filosofia/filosofia.component';
import { EscudoComponent } from './pages/escudo/escudo.component';
import { MuralesComponent } from './pages/murales/murales.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { InversionComponent } from './pages/inversion/inversion.component';


@NgModule({
  declarations: [
    DireccionComponent,
    HistoriaComponent,
    FilosofiaComponent,
    EscudoComponent,
    MuralesComponent,
    DocumentosComponent,
    InversionComponent
  ],
  imports: [
    CommonModule,
    InstitucionRoutingModule
  ]
})
export class InstitucionModule { }
