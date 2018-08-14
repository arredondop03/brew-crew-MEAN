import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {


  theActualUser:any = {};

  loginUser:any = {};

  theError:any;

  constructor(private authService: AuthService, private myRouter: Router) { }
  loggingIn(){
    console.log(this.loginUser);
    this.authService.login(this.loginUser)
    .toPromise()
    .then( userObject => {
      this.theActualUser = userObject;
      this.myRouter.navigate(['/'])
      location.reload();
    } )
    .catch( err => {
      const parsedErr = err.json();
      this.theError = parsedErr.message;
    } )
    // .subscribe(
    //   res => {this.successCallback(res)},
    //   err => {this.errorCallback(err)}
    // );
  }

  successCallback(userObject){
    this.theActualUser = userObject;
    this.theError = "";
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username: '', password:''};
  }

  ngOnInit() {
    this.authService.isLoggedIn()
    .toPromise()
    .then( () => {
      this.myRouter.navigate(['/']);
    } )
    .catch( err => {
      const parsedErr = err.json();
      this.theError = parsedErr.message;
    } )
  }

}
