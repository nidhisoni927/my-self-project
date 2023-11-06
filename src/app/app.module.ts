
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './components/error404/error404.component'
import {AppComponent} from "./app.component";
import {UserModule} from "./user/user.module";
import {AdminModule} from "./admin/admin.module";


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
