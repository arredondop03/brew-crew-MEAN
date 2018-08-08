import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BreweryService } from '../services/brewery.service';


@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  signUpUser:any = {};
  userBrewery: any = {}
  theActualUser:any = {};
  theError:any;
  

  constructor(private authService: AuthService, private breweryService: BreweryService ) { }
  successCallback(userObject){
    this.theActualUser = userObject;
    this.theError = "";
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username: '', password:''};
  }

  signingUp(){
    console.log(this.signUpUser);
    this.authService.signup(this.signUpUser)
    .subscribe(userFromApi => {
      this.successCallback(userFromApi);
      console.log("hiiiiiiiiii", this.theActualUser);


      this.breweryService.createBrewery(this.userBrewery, this.theActualUser._id)
      .subscribe(breweryFromApi => {},
        theError =>{this.errorCallback(theError)}
      )


      },
      theError => {this.errorCallback(theError)}
  );
   
  }

  ngOnInit() {
  }

}
