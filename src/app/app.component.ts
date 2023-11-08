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

  onSubmit({data}: { data: any }) {
    console.log(data)

  }

  protected readonly onsubmit = onsubmit;
}


