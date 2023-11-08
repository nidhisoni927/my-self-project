import { Component } from '@angular/core';

interface dataType {
  name:string,
  age:number,
  indian:boolean,
  address:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-self-project';
userData={
   email:"test@gmail.com",
  password:"123@zxc",
  address:"pune",
  mobile:"96321548"



}
}
