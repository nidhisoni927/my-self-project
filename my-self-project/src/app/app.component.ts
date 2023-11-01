import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-self-project';
 name="nidhi"
  disabledBox=true
  enableBox()
  {
    this.disabledBox=false
  }
}
