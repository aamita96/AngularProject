import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
{path:'' ,component:HomeComponent},
{path:'login' ,component:LoginComponent},
{path:'signup',component:SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
