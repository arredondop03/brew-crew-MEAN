import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginUser: boolean = false
  loginOwner: boolean = false
  signupUser: boolean = false
  signupOwner: boolean = false
  theActualUser:any = {};


  constructor(private authService: AuthService) { }

  showLoginUser(){
    this.loginUser = !this.loginUser
  }

  showSignupUser(){
    this.signupUser = !this.signupUser
  }

  showLoginOwner(){
    this.loginOwner = !this.loginOwner
  }

  showSignupOwner(){
    this.signupOwner = !this.signupOwner
  }

  loggingOut(){

    this.authService.logout()
    .subscribe(Res => {this.theActualUser = {}})
    console.log(' logged out ')
  }

  ngOnInit() {
  }

}
