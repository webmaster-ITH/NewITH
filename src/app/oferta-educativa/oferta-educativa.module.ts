import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaEducativaRoutingModule } from './oferta-educativa-routing.module';
import { ElectricaComponent } from './electrica/electrica.component';
import { NavbarCarreraComponent } from '../component/shared/navbar-carrera/navbar-carrera.component';
import { AdminComponent } from './maestria/admin/admin.component';
import { HomeComponent } from './maestria/components/home/home.component';
import { NavbarComponent } from './maestria/components/navbar/navbar.component';
import { ObjetivoComponent } from './maestria/components/objetivo/objetivo.component';
import { PlanComponent } from './maestria/components/plan/plan.component';
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
import { AdminOfComponent } from './admin/admin.component';
import { PerfilComponent } from './maestria/components/perfil/perfil.component';
import { InversionComponent } from './maestria/components/inversion/inversion.component';
import { ProductividadComponent } from './maestria/components/productividad/productividad.component';
import { AplicacionComponent } from './maestria/components/aplicacion/aplicacion.component';
import { EstudianteComponent } from './maestria/components/estudiante/estudiante.component';
import { ConvocatoriaComponent } from './maestria/components/convocatoria/convocatoria.component';
import { NucleoComponent } from './maestria/components/nucleo/nucleo.component';


@NgModule({
  declarations: [
    ElectricaComponent,
    NavbarCarreraComponent,
    AdminComponent,
    AdminOfComponent,
    HomeComponent,
    NavbarComponent,
    ObjetivoComponent,
    PlanComponent,
    AeronacuticaComponent,
    BiomedicaComponent,
    ElectronicaComponent,
    SemiconductoresComponent,
    IndustrialComponent,
    MecanicaComponent,
    MecatronicaComponent,
    SistemasComponent,
    InformaticaComponent,
    GestionComponent,
    PerfilComponent,
    InversionComponent,
    ProductividadComponent,
    AplicacionComponent,
    EstudianteComponent,
    ConvocatoriaComponent,
    NucleoComponent,
  ],
  imports: [
    CommonModule,
    OfertaEducativaRoutingModule
  ]
})
export class OfertaEducativaModule { }
