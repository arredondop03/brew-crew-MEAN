import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { BeerService } from './services/beer.service';
import { BreweryService } from './services/brewery.service';
import { ReviewService } from './services/review.service';

import { BeerComponent } from './beer/beer.component';
import { BreweryComponent } from './brewery/brewery.component';
import { ReviewComponent } from './review/review.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupOwnerComponent } from './signup-owner/signup-owner.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { LoginUserComponent } from './login-user/login-user.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';

 
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupUserComponent},
  { path: 'login', component: LoginUserComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    SignupUserComponent,
    SignupOwnerComponent,
    LoginOwnerComponent,
    LoginUserComponent,
    BeerComponent,
    BreweryComponent,
    ReviewComponent

  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AuthService, BeerService, BreweryService, ReviewService],
  bootstrap: [AppComponent]
})

export class AppModule { }
