import { Component } from '@angular/core';
import {reduce} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-self-project';
color="grey"
  err=false;
  updateColor()
  {
    this.color="orange"
  }

    }

