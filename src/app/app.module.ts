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
import { AutoComponent } from './plantillas/auto/auto.component';
import { InformacionComponent } from './plantillas/auto/informacion/informacion.component';
import { CompactoComponent } from './plantillas/auto/tipo/compacto/compacto.component';
import { SuvComponent } from './plantillas/auto/tipo/suv/suv.component';
import { DeportivoComponent } from './plantillas/auto/tipo/deportivo/deportivo.component';
import { Promocion1Component } from './plantillas/auto/promociones/promocion1/promocion1.component';
import { Promocion2Component } from './promociones/promocion2/promocion2.component';
import { Promocion3Component } from './promociones/promocion3/promocion3.component';

@NgModule({
  declarations: [
    AppComponent,
    Plantilla1Component,
    SegmentoA1Component,
    SegmentoA2Component,
    SegmentoB1Component,
    SegmentoB2Component,
    SegmentoC1Component,
    SegmentoC2Component,
    AutoComponent,
    InformacionComponent,
    CompactoComponent,
    SuvComponent,
    DeportivoComponent,
    Promocion1Component,
    Promocion2Component,
    Promocion3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
