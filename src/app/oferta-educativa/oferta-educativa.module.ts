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
import { ComputacionComponent } from './maestria/computacion/computacion.component';
import { ConvocatoriaComputacionComponent } from './maestria/computacion/component/convocatoria-computacion/convocatoria-computacion.component';
import { CostosComponent } from './maestria/computacion/component/costos/costos.component';
import { EstudiantesComponent } from './maestria/computacion/component/estudiantes/estudiantes.component';
import { VinculacionComponent } from './maestria/computacion/component/vinculacion/vinculacion.component';
import { ActividadesComponent } from './maestria/computacion/component/actividades/actividades.component';
import { ContactoComponent } from './maestria/computacion/component/contacto/contacto.component';
import { NavbarComponent as navmcc} from './maestria/computacion/component/navbar/navbar.component';
import { HomeComponent as homecc } from './maestria/computacion/component/home/home.component';
import { AplicacionComponent as appcc } from './maestria/computacion/component/aplicacion/aplicacion.component';
import { ConvocatoriaComputacionComponent as convocatoriacc } from './maestria/computacion/component/convocatoria-computacion/convocatoria-computacion.component';
import { ContactoComponent as Contactocc } from './maestria/computacion/component/contacto/contacto.component';
import { ActividadesComponent as actidadescc } from './maestria/computacion/component/actividades/actividades.component';
import { PlanComponent as plancc } from './maestria/computacion/component/plan/plan.component';
import { EstudiantesComponent as estudiantescc } from './maestria/computacion/component/estudiantes/estudiantes.component';
import { CostosComponent as costoscc } from './maestria/computacion/component/costos/costos.component';
import { NucleoComponent as nucleocc } from './maestria/computacion/component/nucleo/nucleo.component';
import { VinculacionComponent as vinculacioncc } from './maestria/computacion/component/vinculacion/vinculacion.component';
import { PerfilComponent as perfilcc } from './maestria/computacion/component/perfil/perfil.component';
import { ProductividadComponent as produccc } from './maestria/computacion/component/productividad/productividad.component';
import { NavbarComponent as navbar3 } from './maestria/Electronica/navbar/navbar.component';
//electronica
import {HomeComponent as homeElec} from './maestria/Electronica/home/home.component';
import {CostosComponent as costoElec} from './maestria/Electronica/costos/costos.component';
import {ConvocatoriaComponent as convoElec} from './maestria/Electronica/convocatoria/convocatoria.component';
import {PlanComponent as planElec} from './maestria/Electronica/plan/plan.component';
import {AplicacionComponent as appElec} from './maestria/Electronica/aplicacion/aplicacion.component';
import {NucleoComponent as nucleoElec} from './maestria/Electronica/nucleo/nucleo.component';
import {EstudianteComponent as estdianElec} from './maestria/Electronica/estudiante/estudiante.component';
import {ProductividadComponent as producElec} from './maestria/Electronica/productividad/productividad.component';
import {VinculacionComponent as VinculaElec} from './maestria/Electronica/vinculacion/vinculacion.component';
import {ActividadesComponent as actElec} from './maestria/Electronica/actividades/actividades.component';
import {ContactoComponent as contacElec} from './maestria/Electronica/contacto/contacto.component';
import { ConvocatoriasComponent } from './maestria/INDUSTRIAL/convocatorias/convocatorias.component';
import { ObjetivosComponent } from './maestria/INDUSTRIAL/objetivos/objetivos.component';
import { ActividadComponent } from './maestria/INDUSTRIAL/actividad/actividad.component';
//industrial
import {HomeComponent as homeIndus} from './maestria/INDUSTRIAL/home/home.component';
import {ActividadComponent as actIndus} from './maestria/INDUSTRIAL/actividad/actividad.component';
import {ContactoComponent as contacIndus} from './maestria/INDUSTRIAL/contacto/contacto.component';
import {ConvocatoriasComponent as convoIndus} from './maestria/INDUSTRIAL/convocatorias/convocatorias.component';
import {EstudiantesComponent as estudiaIndus} from './maestria/INDUSTRIAL/estudiantes/estudiantes.component';
import {InversionComponent as inverIndus} from './maestria/INDUSTRIAL/inversion/inversion.component';
import {NucleoComponent as nucleoIndus} from './maestria/INDUSTRIAL/nucleo/nucleo.component';
import {ObjetivosComponent as objIndus} from './maestria/INDUSTRIAL/objetivos/objetivos.component';
import {PerfilComponent as perfilIndus} from './maestria/INDUSTRIAL/perfil/perfil.component';
import {PlanComponent as planIndus} from './maestria/INDUSTRIAL/plan/plan.component';
import {ProductividadComponent as producIndus} from './maestria/INDUSTRIAL/productividad/productividad.component';
import {NavbarComponent as navbar4} from './maestria/INDUSTRIAL/navbar/navbar.component';
@NgModule({
  declarations: [
    homeElec,
    navbar4,
    nucleoIndus,
    perfilIndus,
    producIndus,
    objIndus,
    planIndus,
    inverIndus,
    estudiaIndus,
    convoIndus,
    actIndus,
    contacIndus,
    homeIndus,
    costoElec,
    convoElec,
    contacElec,
    producElec,
    estdianElec,
    actElec,
    VinculaElec,
    planElec,
    appElec,
    nucleoElec,
    ElectricaComponent,
    estudiantescc,
    navbar3,
    produccc,
    vinculacioncc,
    perfilcc,
    nucleocc,
    costoscc,
    plancc,
    actidadescc,
    Contactocc,
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
    ComputacionComponent,
    ConvocatoriaComputacionComponent,
    CostosComponent,
    EstudiantesComponent,
    VinculacionComponent,
    ActividadesComponent,
    ContactoComponent,
    navmcc,
    homecc,
    convocatoriacc,
    appcc,
    ConvocatoriasComponent,
    ObjetivosComponent,
    ActividadComponent
  ],
  imports: [
    CommonModule,
    OfertaEducativaRoutingModule
  ]
})
export class OfertaEducativaModule { }
