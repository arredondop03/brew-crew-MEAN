import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent implements OnInit {


  theActualUser:any = {};

  loginUser:any = {};

  theError:any;

  constructor(private authService: AuthService) { }
  loggingIn(){
    console.log(this.loginUser);
    this.authService.login(this.loginUser)
    .subscribe(
      res => {this.successCallback(res)},
      err => {this.errorCallback(err)}
    );
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
  }

}
