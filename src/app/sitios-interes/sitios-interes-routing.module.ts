import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CiieComponent } from './pages/ciie/ciie.component';
import { CodigoEticaComponent } from './pages/codigo-etica/codigo-etica.component';
import { ContraloresSocialesComponent } from './pages/contralores-sociales/contralores-sociales.component';
import { MaterialServidoresPublicosComponent } from './pages/material-servidores-publicos/material-servidores-publicos.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { ProcesoComponent } from './pages/proceso/proceso.component';
import { RecursoComponent } from './pages/recurso/recurso.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path: 'Calendario', component: CalendarioComponent},
  {path: 'Ciie', component: CiieComponent},
  {path: 'Proceso', component: ProcesoComponent},
  {path: 'Recurso', component: RecursoComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: 'CodigoEtica', component: CodigoEticaComponent},
  {path: 'ContraloresSociales', component: ContraloresSocialesComponent},
  {path: 'MaterialServidoresPublicos', component: MaterialServidoresPublicosComponent},
  {path: 'Galery', component: GaleryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitiosInteresRoutingModule { }
