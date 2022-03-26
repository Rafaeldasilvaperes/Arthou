import { RegisteredComponent } from './view/register/registered/registered.component';
import { RegisterComponent } from './view/register/register.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: "",
    component: HomeComponent   
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "registered",
    component: RegisteredComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
