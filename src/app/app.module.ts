import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MetodosEComponent} from "./metodos-e/metodos-e.component";
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import { HttpModule, Http} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BiseccionComponent } from './biseccion/biseccion.component';
import { RectangulosComponent } from './rectangulos/rectangulos.component';
import { SecanteComponent } from './secante/secante.component';





@NgModule({
  declarations: [
    AppComponent,
    BiseccionComponent,
    RectangulosComponent,
    SecanteComponent,
   


  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HomeModule,
    HttpClientModule,
   
  ],
  providers: [  HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
