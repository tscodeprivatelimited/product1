import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RESTService  } from "../services/rest.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router : Router,private rest :RESTService) { }

  ngOnInit() {
  }
signout(){
  //Navigate to Home page
     this.router.navigate(["/welcome"]);
}
}
