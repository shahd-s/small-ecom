import { InvalidComponent } from './../invalid/invalid.component';
import { CustHomeComponent } from './../cust-home/cust-home.component';
import { AdminHomeComponent } from './../admin-home/admin-home.component';
import { LogInComponent } from './../login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  

const routes: Routes = [
  { path: "", component: LogInComponent },
  { path: "adminHome", component: AdminHomeComponent},
  { path: "custHome", component: CustHomeComponent},
  {path: "invalidAccess", component: InvalidComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
