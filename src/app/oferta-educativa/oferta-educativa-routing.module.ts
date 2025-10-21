import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricaComponent } from './electrica/electrica.component';
import { HomeComponent } from './maestria/components/home/home.component';
import { AdminComponent } from './maestria/admin/admin.component';
import { ObjetivoComponent } from './maestria/components/objetivo/objetivo.component';
import { AeronacuticaComponent } from './aeronacutica/aeronacutica.component';
import { BiomedicaComponent } from './biomedica/biomedica.component';
import { ElectronicaComponent } from './electronica/electronica.component';
import { SemiconductoresComponent } from './semiconductores/semiconductores.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { MecanicaComponent } from './mecanica/mecanica.component';
import { MecatronicaComponent } from './mecatronica/mecatronica.component';
import { SistemasComponent } from './sistemas/sistemas.component';
import { InformaticaComponent } from './informatica/informatica.component';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
  {path:'',
    children: [
      { path: 'Aeronautica', component: AeronacuticaComponent },
      { path: 'Biomedica', component: BiomedicaComponent },
      { path: 'Electrica', component: ElectricaComponent },
      { path: 'Electronica', component: ElectronicaComponent },
      { path: 'Semiconductores', component: SemiconductoresComponent },
      { path: 'Industrial', component: IndustrialComponent },
      { path: 'Mecanica', component: MecanicaComponent },
      { path: 'Mecatronica', component: MecatronicaComponent },
      { path: 'Administracion', component: AdminComponent },
      { path: 'Sistemas', component: SistemasComponent },
      { path: 'Informatica', component: InformaticaComponent },
      { path: 'Gestion', component: GestionComponent },
      
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
