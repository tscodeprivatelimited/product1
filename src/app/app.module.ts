import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  Routes, RouterModule } from '@angular/router'; //for routing
// import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
// import {PopupModule} from 'ng2-opd-popup';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
 

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
