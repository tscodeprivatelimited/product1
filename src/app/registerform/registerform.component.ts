import { Component,ViewChild, OnInit } from '@angular/core';
import { RESTService  } from "../services/rest.service"; 
import  {  NgForm }  from  '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  @ViewChild('registrationForm')  form:  NgForm;

  public postData={
    userName:'',
    licenseNumber:'',
    password:'',
    que1:'',
    que2:'',
    ans1:'',
    ans2:''
  };
  constructor(private rest :RESTService, private route:Router) { }


  ngOnInit() {
  }
  register(){
    if(this.form.value.adminPassword == "tscode"){
    this.postData.userName=this.form.value.username;
    this.postData.password=this.form.value.password;
    this.postData.que1=this.form.value.que1;
    this.postData.que2=this.form.value.que2;
    this.postData.ans1=this.form.value.ans1;
    this.postData.ans2=this.form.value.ans2;
    this.postData.licenseNumber=this.form.value.username+this.form.value.ans1;

    console.log("Clicked");
    this.rest.doPost("http://localhost:8090/register",this.postData).subscribe(
        (response) => {
         console.log("In side call");
               this.route.navigate(["/welcome"]);
      },  

      (error)  =>  { }
    );

    }else{
      alert("Wrong Admin Password, Kindly re enter Admin Password !");
    }

  }
}
