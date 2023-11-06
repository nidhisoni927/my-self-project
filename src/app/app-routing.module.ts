import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./components/error404/error404.component";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {AdminLoginComponent} from "./admin/admin-login/admin-login.component";
import {AdminListComponent} from "./admin/admin-list/admin-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'login', component: AdminLoginComponent },
      { path: 'list' , component: AdminListComponent}
    ]
  },
  {
    path: 'user', component: UserComponent, children: [
      { path: 'login', component: UserLoginComponent },
      { path: 'list' , component: UserListComponent}
    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
