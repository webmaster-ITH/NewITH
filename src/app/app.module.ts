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
    ConvocatoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
