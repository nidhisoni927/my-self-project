import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderRoutingModule } from './header-routing.module';
import { FormsModule} from "@angular/forms";
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HeaderRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
