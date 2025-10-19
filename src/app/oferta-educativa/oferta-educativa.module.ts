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


@NgModule({
  declarations: [
    ElectricaComponent,
    NavbarCarreraComponent,
    AdminComponent,
    HomeComponent,
    NavbarComponent,
    ObjetivoComponent,
    PlanComponent,
  ],
  imports: [
    CommonModule,
    OfertaEducativaRoutingModule
  ]
})
export class OfertaEducativaModule { }
