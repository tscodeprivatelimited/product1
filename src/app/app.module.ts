import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  Routes, RouterModule } from '@angular/router'; //for routing
// import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
// import {PopupModule} from 'ng2-opd-popup';
import { RESTService } from "./services/rest.service";
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
 import { Angular2FontawesomeModule  } from 'angular2-fontawesome/angular2-fontawesome';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

    HomeComponent,

    RegisterformComponent,

    HeaderComponent,

    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    Angular2FontawesomeModule
    ],
  providers: [RESTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
