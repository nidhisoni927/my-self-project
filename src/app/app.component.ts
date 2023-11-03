import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-self-project';
  users = [
    {
      name: 'nidhi',
      age: 28,
      address: 'pune'
    },
    {
      name: 'jay',
      age: 22,
      address: 'indore'
    },
    {
      name: 'ram',
      age: 48,
      address: 'india'
    },
    {
      name: 'sangu',
      age: 36,
      address: 'mumbai'
    }

  ]
}
