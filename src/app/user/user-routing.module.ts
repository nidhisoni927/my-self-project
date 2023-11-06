import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserComponent} from "./user.component";


const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {path: 'login', component: UserLoginComponent},
      {path: 'list', component: UserListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
