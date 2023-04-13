import { AppComponent } from './app.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { MainFormComponent } from './main-form/main-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/empDetails', pathMatch: 'full' },
  {
    path: 'empDetails', component: MainFormComponent, children: [
      { path: '', component: DisplayFormComponent },
    ]
  },
  {
    path: ':id/edit', component: MainFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
