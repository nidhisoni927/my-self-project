import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {UserLoginComponent} from "../user/user-login/user-login.component";
import {UserListComponent} from "../user/user-list/user-list.component";



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: UserLoginComponent },
  { path: 'list' , component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
