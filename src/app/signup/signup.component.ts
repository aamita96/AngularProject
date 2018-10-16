import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signupForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm=new FormGroup({
      'username':new FormControl(null,[Validators.required]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(6)]),
      'phone':new FormControl(null,[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
      'term_and_conditon': new FormControl(null,Validators.required)
    });
  }
  onSignUp(){
    console.log(this.signupForm);
  }

  /*chkSize(control:FormControl):{[s:string]:boolean}{
    if(this.signupForm.value.password.length <= 5)
    {
      return {'minPassLen':true};
    }
    return null;
  }*/
  
  
}
