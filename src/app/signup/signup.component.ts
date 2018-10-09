import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:string;
  email:string;
  password:string;
  phone:number;
  chkbox=false;
  constructor() { }

  ngOnInit() {
  }
  onSignUp(){
    console.log(this.username,this.email,this.password,this.phone,this.chkbox);
  }
  
  
}
