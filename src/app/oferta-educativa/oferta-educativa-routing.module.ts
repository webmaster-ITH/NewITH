


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
import { AdminOfComponent } from './admin/admin.component';
import { PlanComponent } from './maestria/components/plan/plan.component';
import { PerfilComponent } from './maestria/components/perfil/perfil.component';
import { InversionComponent } from './maestria/components/inversion/inversion.component';
import { NucleoComponent } from './maestria/components/nucleo/nucleo.component';
import { ProductividadComponent } from './maestria/components/productividad/productividad.component';
import { AplicacionComponent } from './maestria/components/aplicacion/aplicacion.component';
import { EstudianteComponent } from './maestria/components/estudiante/estudiante.component';
import { ConvocatoriaComponent } from './maestria/components/convocatoria/convocatoria.component';
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
// import { HomeComponent as homecc } from './maestria/computacion/component/home/home.component';
// import { HomeComponent as homecc } from './maestria/computacion/component/home/home.component';
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
      { path: 'Administracion', component: AdminOfComponent },
      { path: 'Sistemas', component: SistemasComponent },
      { path: 'Informatica', component: InformaticaComponent },
      { path: 'Gestion', component: GestionComponent },
      //rutas de maestria admin
      { path:'Maestria-Admin', component: AdminComponent},
      { path:'Objetivos', component: ObjetivoComponent},
      { path:'Plan', component: PlanComponent},
      { path:'Perfil', component: PerfilComponent},
      { path:'Inversion', component: InversionComponent},
      { path:'Nucleo', component: NucleoComponent},
      { path:'Productividad', component: ProductividadComponent},
      { path:'Aplicaciones', component: AplicacionComponent},
      { path:'Estudiantes', component: EstudianteComponent},
      { path:'Convocatorias', component: ConvocatoriaComponent},
      //rutas de mcc
      {path:'Maestria-CC', component: homecc},
      {path:'Maestria-CC-app', component: appcc},
      {path:'Maestria-CC-plan', component: plancc},
      {path:'Maestria-CC-objetivo', component: homecc},
      {path:'Maestria-CC-perfil', component: perfilcc},
      {path:'Maestria-CC-costo', component: costoscc},
      {path:'Maestria-CC-actividades', component: actidadescc},
      {path:'Maestria-CC-estudiantes', component: estudiantescc},
      {path:'Maestria-CC-nucleo', component: nucleocc},
      {path:'Maestria-CC-productivdad', component: produccc},
      {path:'Maestria-CC-convocatoria', component: convocatoriacc},
      {path:'Maestria-CC-contacto', component: Contactocc},
      {path:'Maestria-CC-vinculacion', component: vinculacioncc},
      // {path:'Maestria-CC-productivdad', component: homecc},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertaEducativaRoutingModule { }
