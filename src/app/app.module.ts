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

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavComponent,
    FontImgComponent,
    FooterComponent,
    SeccionComoFuncionaComponent,
    VentajasDeElegirnosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
