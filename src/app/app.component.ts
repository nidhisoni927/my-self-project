import { Component } from '@angular/core';
import {UserServiveService} from './user-servive.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-self-project';

   data: any;

constructor(private  user:UserServiveService) {
  this.user.getData().subscribe(date=>{
    console.log(this.data)
    // @ts-ignore
    this.data=date
  })
}
}
