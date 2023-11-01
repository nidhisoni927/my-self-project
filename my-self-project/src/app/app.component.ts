import { Component } from '@angular/core';
import {reduce} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-self-project';
  data=[
    {
      name: 'anil',
      age: 28
    },
    {
      name:'jay',
      age:22
    },
    {
      name: 'nidhi',
      age: 24
    }




  ]



}
