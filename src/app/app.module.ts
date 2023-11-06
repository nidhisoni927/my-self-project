
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './components/error404/error404.component'
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
