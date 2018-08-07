import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {


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
