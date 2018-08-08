import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { LoginUserComponent } from './login-user/login-user.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { EditBeerReviewComponent } from './edit-beer-review/edit-beer-review.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupUserComponent},
  { path: 'login', component: LoginUserComponent},
<<<<<<< HEAD
  { path: 'breweries/:id/beers', component: BeerComponent}
=======
  { path: 'beers/:id', component: BeerDetailsComponent}

>>>>>>> 66575f234623b942468efa0cd8cd00ea675ab732

];



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    SignupUserComponent,
<<<<<<< HEAD
    LoginUserComponent, 
=======
    LoginUserComponent,
>>>>>>> 66575f234623b942468efa0cd8cd00ea675ab732
    BeerComponent,
    BreweryComponent,
    ReviewComponent,
    EditBeerReviewComponent,
    BeerDetailsComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, BeerService, BreweryService, ReviewService],
  bootstrap: [AppComponent]
})

export class AppModule { }
