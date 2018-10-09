import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLogIn(){
    if(this.email=="admin" && this.password=="admin"){
      console.log(this.email,this.password);
      this.router.navigate(['home']);
    }else{
      alert("Please enter correct Username and Password.");
    }
  }

}
