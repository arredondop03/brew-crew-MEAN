import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logIn: boolean = false
  signUp: boolean = false
  theActualUser:any = {};
  buttons: boolean = true


  constructor(private authService: AuthService) { }

  showSignup(){
    this.signUp = !this.signUp
  }

  showLogin(){
    this.logIn = !this.logIn
  }

  disappearButtons(){
    this.buttons = !this.buttons
  }

  reloadPage(){
    location.reload();
  }


  loggingOut(){
    this.authService.logout()
    .subscribe(Res => {this.theActualUser = {}})
    console.log(' logged out ')
  }

  ngOnInit() {
  }

}
