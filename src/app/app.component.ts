import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators,} from '@angular/forms';
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
 loginForm= new FormGroup({
   email:new FormControl('',Validators.required),
   password:new FormControl('')

 })

  get email(){return this.loginForm.get('email')

  }
  onSubmit({data}: { data: any }) {
    console.log(data)

  }

}
