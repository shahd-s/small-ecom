import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LogInComponent} from './login.component'
import {WebService} from './web.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { InvalidComponent } from './invalid/invalid.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AdminHomeComponent,
    CustHomeComponent,
    InvalidComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
