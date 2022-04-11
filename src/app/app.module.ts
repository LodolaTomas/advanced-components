import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConEstadoComponent } from './con-estado/con-estado.component';
import { SinEstadoComponent } from './sin-estado/sin-estado.component';
import { AlertaConfirmacionComponent } from './alerta-confirmacion/alerta-confirmacion.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContenedorImagenComponent } from './contenedor-imagen/contenedor-imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    ConEstadoComponent,
    SinEstadoComponent,
    AlertaConfirmacionComponent,
    ShoppingCartComponent,
    ContenedorImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
