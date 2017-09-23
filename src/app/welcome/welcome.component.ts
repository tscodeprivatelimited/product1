import { Component, OnInit,ViewChild } from '@angular/core';
// import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginComponent } from './login/login.component'
import  {  NgForm }  from  '@angular/forms'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
    @ViewChild('logInForm')  form:  NgForm; 
   signinflag : boolean = false;
  public errorMsg:String='';

   constructor(public router : Router ) {
   
   }

  ngOnInit() {
  }
  //function for welcome page sign in button click
   opensignin() {
    // this.modal.open(LoginComponent);
    this. signinflag = true;
    console.log("open sign in");
   }
login(){
  if(this.form.value.username == '1' || this.form.value.username== '2'){
    if(this.form.value.password=='1'){
     console.log("Welcome !!!");
     //Navigate to Home page
     this.router.navigate(["/home"]);
    }else{
      this.errorMsg="Password is Wrong !!";
      //open error model with this text
      console.log("Password is Wrong !!");
    }
  }else{
    
      this.errorMsg="UserName is Wrong !!";
      //open error model with this text
      console.log("UserName is Wrong !!");
  }
}


  }
