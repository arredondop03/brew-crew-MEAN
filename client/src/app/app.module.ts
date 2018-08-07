import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { BeerService } from './services/beer.service';
import { BreweryService } from './services/brewery.service';
import { ReviewService } from './services/review.service';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { BeerComponent } from './beer/beer.component';
import { BreweryComponent } from './brewery/brewery.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
