import { Component, OnInit } from '@angular/core';
import { RESTService  } from "../services/rest.service"; 
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor(private rest :RESTService) { }


  ngOnInit() {
  }
  register(){
    console.log("Clicked");
this.rest.doGet("http://localhost:8090/register/registerUser",null).subscribe(
      (response) => {
         
      },

      (error)  =>  { }
    );

  }
}
