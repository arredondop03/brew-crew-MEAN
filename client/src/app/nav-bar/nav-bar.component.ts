import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  theActualUser:any = {};
  buttons: boolean = true
  logIn: boolean = false
  signUp: boolean = false


  constructor(private authService: AuthService, private myRouter: Router) { }


  showSignup(){
    this.signUp = !this.signUp
  }

  showLogin(){
    this.logIn = !this.logIn
  }

  disappearButtons(){
    // this.checkIfLoggedIn()
    this.buttons = !this.buttons
  }

  showButtonsAgain(){
    location.reload()
  }


  loggingOut(){
    // this.checkIfLoggedIn()
    this.authService.logout()
    .subscribe(Res => {this.theActualUser = {}})
    location.reload()

    console.log(' logged out ')
  }

  checkIfLoggedIn(){
    this.authService.isLoggedIn()
    .toPromise()
    .then( resFromDB => {
      console.log('user in notes: ', resFromDB)
      this.theActualUser = resFromDB;
    } )
  }

  ngOnInit() {
    this.authService.isLoggedIn()
    .toPromise()
    .then( resFromDB => {
      console.log('user in notes: ', resFromDB)
      this.theActualUser = resFromDB;
    } )
  }

}
