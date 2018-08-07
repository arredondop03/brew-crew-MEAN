import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupOwnerComponent } from './signup-owner/signup-owner.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { LoginUserComponent } from './login-user/login-user.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    SignupUserComponent,
    SignupOwnerComponent,
    LoginOwnerComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
