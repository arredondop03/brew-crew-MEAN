import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { jsonpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: Http) { }

  handleError(e){
    return Observable.throw(e.json().message);
  }

  allBreweries(){
    return this.http.get('http://localhost:3000/api/breweries', {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  oneBrewery(brewery){
    return this.http.get('http://localhost:3000/api/breweries/', brewery)
    .map(res => res.json())
    .catch(this.handleError)
  }

  createBrewery(){
    return this.http.get('http://localhost:3000/api/breweries/create', )
    .map(res => res.json())
    .catch(this.handleError)
  }

  editBrewery(brewery){
    return this.http.post(`http://localhost:3000/api/breweries/${brewery}/edit`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  deleteBrewery(brewery){
    return this.http.post(`http://localhost:3000/api/breweries/${brewery}/remove`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  //Reviews Section
  breweryReviews(){
    return this.http.get('http://localhost:3000/api/breweries/review')
    .map(res => res.json())
    .catch(this.handleError)
  }

  beerReview(){
    return this.http.get('http://localhost:3000/api/review')
    .map(res => res.json())
    .catch(this.handleError)
  }

  addReview(beerEntry){
    return this.http.post(`http://localhost:3000/api/beers/${beerEntry}/review/create`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  editReview(beerEntry, reviewEntry){
    return this.http.post(`http://localhost:3000/api/beers/${beerEntry}/review/${reviewEntry}/edit`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  removeReview(beerEntry, reviewEntry){
    return this.http.post(`http://localhost:3000/api/beers/${beerEntry}/review/${reviewEntry}/delete`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }
}