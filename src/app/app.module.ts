import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Plantilla1Component } from './plantillas/plantilla1/plantilla1.component';
import { SegmentoA1Component } from './segmentos/segmento-a1/segmento-a1.component';
import { SegmentoA2Component } from './segmentos/segmento-a2/segmento-a2.component';
import { SegmentoB1Component } from './segmentos/segmento-b1/segmento-b1.component';
import { SegmentoB2Component } from './segmentos/segmento-b2/segmento-b2.component';
import { SegmentoC1Component } from './segmentos/segmento-c1/segmento-c1.component';
import { SegmentoC2Component } from './segmentos/segmento-c2/segmento-c2.component';

@NgModule({
  declarations: [
    AppComponent,
    Plantilla1Component,
    SegmentoA1Component,
    SegmentoA2Component,
    SegmentoB1Component,
    SegmentoB2Component,
    SegmentoC1Component,
    SegmentoC2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
