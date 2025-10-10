import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from './pages/direccion/direccion.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { FilosofiaComponent } from './pages/filosofia/filosofia.component';
import { InversionComponent } from './pages/inversion/inversion.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { EscudoComponent } from './pages/escudo/escudo.component';
import { MuralesComponent } from './pages/murales/murales.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'Direccion', component: DireccionComponent},
      {path:'Historia', component: HistoriaComponent},
      {path:'Filosofia', component: FilosofiaComponent},
      {path:'Escudo', component: EscudoComponent},
      {path:'Murales', component: MuralesComponent},
      {path:'Documentos', component: DocumentosComponent},
      {path: '**', redirectTo: 'Direccion'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionRoutingModule { }
