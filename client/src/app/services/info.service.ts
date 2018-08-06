import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class InfoService {

  constructor(private http: Http) { }

  handleError(e){
    return Observable.throw(e.json().message);
  }

//Beginning of Service Routes for all of the Breweries----------------------------------------
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

  createBrewery(theBreweryEntry){
    return this.http.post('http://localhost:3000/api/breweries/create', theBreweryEntry)
    .map((res) => res.json())
    .catch(this.handleError)
  }

  editBrewery(brewery){
    return this.http.post(`http://localhost:3000/api/breweries/${brewery}/edit`, {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  deleteBrewery(brewery){
    return this.http.post(`http://localhost:3000/api/breweries/${brewery}/remove`, {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  //Beginning of Service Routes for all the Beers-------------------------------------------------------------

  allBeers(){
    return this.http.get('http://localhost:3000/api/beers', {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  oneBeer(theBreweryID){
    return this.http.get('http://localhost:3000/api/breweries/' + theBreweryID + '/beers', theBreweryID)
    .map((res) => res.json())
    .catch(this.handleError)
  }

  createBeer(theBreweryID){
    return this.http.post('http://localhost:3000/api/breweries/' + theBreweryID + '/beers/create', theBreweryID)
    .map((res) => res.json())
    .catch(this.handleError)
  }


}
