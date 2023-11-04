import { Component } from '@angular/core';
interface dataType{
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
  getData()
  {
    const data:dataType ={
      name:'Nidhi',
      age:30,
      indian:true,
      address:'127,pune ,MH'

    }
    return data;
  }


}
