import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
    this.login=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required])
    });
  }

  

  onLogIn(){
    // if(this.signupForm=="admin" && this.password=="admin"){
    //   console.log(this.email,this.password);
    //   this.router.navigate(['home']);
    // }else{
    //   alert("Please enter correct Username and Password.");
    // }
    console.log(this.login.value.email,this.login.value.password);
    console.log(this.login);
  }


}
