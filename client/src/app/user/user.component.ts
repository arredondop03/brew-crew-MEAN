import { Component, OnInit } from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { AuthService }       from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  signupForm: boolean = false
  signUpUser:any = {};
  theActualUser:any = {};
  loginUser:any = {};
  theError:any;

  constructor(private authService: AuthService) { }
  //allowing us to use AuthService in this component

  signingUp(){
    console.log(this.signUpUser);
    this.authService.signup(this.signUpUser)
    .subscribe(
      userFromApi => {this.successCallback(userFromApi)},
      theError => {this.errorCallback(theError)}
    );
  }

  loggingIn(){
    console.log(this.loginUser);
    this.authService.login(this.loginUser)
    .subscribe(
      res => {this.successCallback(res)},
      err => {this.errorCallback(err)}
    );
  }

  loggingOut(){
    this.authService.logout()
    .subscribe(res => {this.theActualUser = {}})
  }

  successCallback(userObject){
    this.theActualUser = userObject;
    this.theError = "";
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username: '', password:''};
  }

  checkIsLoggedIn(){
    this.authService.isLoggedIn()
    .subscribe(
      res => {this.successCallback(res)},
      err => {this.errorCallback(null)}
    )
  }

  showSignupOptions(){
    this.signupForm = !this.signupForm
  }

  ngOnInit() {
    this.checkIsLoggedIn();
  }

}
