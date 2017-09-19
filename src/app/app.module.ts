import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  Routes, RouterModule } from '@angular/router'; //for routing
// import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
// import {PopupModule} from 'ng2-opd-popup';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './welcome/login/login.component';
import { HomeComponent } from './home/home.component';
//added for routing 
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // PopupModule.forRoot(),
    RouterModule.forRoot(appRoutes) //for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
