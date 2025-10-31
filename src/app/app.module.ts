import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaruselComponent } from './component/carusel/carusel.component';
import { NoticiaslistComponent } from './component/home/noticiaslist/noticiaslist.component';
import { SitiosInteresComponent } from './component/home/sitios-interes/sitios-interes.component';
import { FooterGobComponent } from './component/shared/footer-gob/footer-gob.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { NavbarGobComponent } from './component/shared/navbar-gob/navbar-gob.component';
import { NavbarMainComponent } from './component/shared/navbar-main/navbar-main.component';
import { NavbarTopComponent } from './component/shared/navbar-top/navbar-top.component';
import { HomeComponent } from './page/home/home.component';
import { NotaComponent } from './page/nota/nota.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvocatoriasComponent } from './page/convocatorias/convocatorias.component';
import { NavbarCarreraComponent } from './component/shared/navbar-carrera/navbar-carrera.component';
import { IsoComponent } from './pages/iso/iso.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { U079Component } from './pages/u079/u079.component';
import { SGIGComponent } from './pages/sgig/sgig.component';
import { VideosComponent } from './pages/videos/videos.component';
import { NotasOldComponent } from './pages/notas-old/notas-old.component';
import { FormsModule } from '@angular/forms';
import { ApoyoMadresComponent } from './page/convocatorias/component/apoyo-madres/apoyo-madres.component';
import { PromocionDocentesComponent } from './page/convocatorias/component/promocion-docentes/promocion-docentes.component';
import { CapacitacionMicrosoftComponent } from './page/convocatorias/component/capacitacion-microsoft/capacitacion-microsoft.component';
import { HuaweiComponent } from './page/convocatorias/component/huawei/huawei.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarGobComponent,
    NavbarTopComponent,
    NavbarMainComponent,
    HeaderComponent,
    HomeComponent,
    CaruselComponent,
    NoticiaslistComponent,
    SitiosInteresComponent,
    FooterComponent,
    FooterGobComponent,
    NotaComponent,
    ConvocatoriasComponent,
    IsoComponent,
    U079Component,
    SGIGComponent,
    VideosComponent,
    NotasOldComponent,
    ApoyoMadresComponent,
    PromocionDocentesComponent,
    CapacitacionMicrosoftComponent,
    HuaweiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
