import { Component, OnInit } from '@angular/core';
// import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginComponent } from './login/login.component' 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
   
   signinflag : boolean = false;
  constructor( ) {
   
   }

  ngOnInit() {
  }
  //function for welcome page sign in button click
   opensignin() {
    // this.modal.open(LoginComponent);
    this. signinflag = true;
    console.log("open sign in");
   }
}
