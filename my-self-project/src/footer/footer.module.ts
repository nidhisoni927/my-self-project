import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterRoutingModule } from './footer-routing.module';
import { FormsModule} from "@angular/forms";
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FooterRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FooterComponent]
})
export class FooterModule { }
