import { Component, OnInit,ViewChild } from '@angular/core';
import  {  NgForm }  from  '@angular/forms'; 
import { Router } from '@angular/router';
import { RESTService  } from "../services/rest.service";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
    @ViewChild('logInForm')  form:  NgForm; 
   signinflag : boolean = false;
  public errorMsg:String='';
  public showErrorCredential:boolean=false;
   constructor(public router : Router,private rest :RESTService ) {
   
   }
public details={
    userName:'',
    licenseNumber:'',
    password:'',
    que1:'',
    que2:'',
    ans1:'',
    ans2:''
  };
  ngOnInit() {
    this.rest.doGet("http://localhost:8090/getLicenseDetails").subscribe(
        (response) => {
         this.details=response;
          console.log("In side call");
      },  

      (error)  =>  { }
    );


  }
  //function for welcome page sign in button click
   opensignin() {
    // this.modal.open(LoginComponent);
    this. signinflag = true;
    console.log("open sign in");
   }
login(){
//Get userNAme and pwd from license file. 
//By API .
//this.rest.doGet("https:localhost:8080/getLicenseDetails")
  if(this.form.value.username == this.details.userName){
    if(this.form.value.password==this.details.password){
     console.log("Welcome !!!");
     //Navigate to Home page
     this.router.navigate(["/home"]);
    }else{
      this.errorMsg="Password is Wrong !!";
      //open error model with this text
      // alert("Wrong details !! Please try again...");
  
  this.showErrorCredential=true;  }
  }else{
    
      this.errorMsg="UserName is Wrong !!";
      //open error model with this text
      // alert("Wrong details !!Please try again...");
  this.showErrorCredential=true;
    }

}

openRegisterForm(){
  this.router.navigate(["/registerform"]);
}
}
