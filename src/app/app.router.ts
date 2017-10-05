import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { RegisterformComponent } from "./registerform/registerform.component";

const router: Routes = [
  { path: 'welcome', component: WelcomeComponent },
{ path: 'home', component: HomeComponent }  ,
{ path: 'registerform', component: RegisterformComponent},
 { path: '', component:  WelcomeComponent}
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);