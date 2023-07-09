import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { NavComponent } from './nav/nav.component';
import { FontImgComponent } from './font-img/font-img.component';
import { FooterComponent } from './footer/footer.component';
import { SeccionComoFuncionaComponent } from './seccion-como-funciona/seccion-como-funciona.component';
import { VentajasDeElegirnosComponent } from './ventajas-de-elegirnos/ventajas-de-elegirnos.component';
import { LoginpaseadorComponent } from './pages/loginpaseador/loginpaseador.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages/pages.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './pages/test/test.component';
import { RegisterusuarioComponent } from './pages/registerusuario/registerusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavComponent,
    FontImgComponent,
    FooterComponent,
    SeccionComoFuncionaComponent,
    VentajasDeElegirnosComponent,
    LoginpaseadorComponent,
    DashboardComponent,
    PagesComponent,
    NopagesfoundComponent,
    TestComponent,
    RegisterusuarioComponent
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
