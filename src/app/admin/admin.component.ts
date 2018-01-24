import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RESTService  } from "../services/rest.service";
import  {  NgForm }  from  '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 @ViewChild('adminLogInForm')  form:  NgForm; 
   signinflag : boolean = false;
  public errorMsg:String='';
  public showErrorCredential:boolean=false;
  constructor(public router : Router,private rest :RESTService) { }
  public admindetails={
    adminuserName:'',
    adminpassword:'',
  };

  ngOnInit() {
  }

  adminlogin(){
//Get userNAme and pwd from license file. 
//By API .
//this.rest.doGet("https:localhost:8080/getLicenseDetails")
  if(this.form.value.adminusername == this.admindetails.adminuserName){
    if(this.form.value.adminpassword == this.admindetails.adminpassword){
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
}
