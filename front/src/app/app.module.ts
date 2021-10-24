import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/common/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PropuestaComponent } from './components/propuesta/propuesta.component';
//paquete para el manejo de peticiones http
import { HttpClientModule } from '@angular/common/http';
import { AngularD3CloudModule } from 'angular-d3-cloud';
import { NubeComponent } from './components/nube/nube.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PropuestaComponent,
    NubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularD3CloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
