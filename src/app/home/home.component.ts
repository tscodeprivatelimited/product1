import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RESTService  } from "../services/rest.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router : Router,private rest :RESTService) { }

  ngOnInit() {
  }
// adminclick(){
//   //Navigate to Home page
//      this.router.navigate(["/admin"]);
// }
openBillingPage(){
  this.router.navigate(["/billingpage"]);
}
}

