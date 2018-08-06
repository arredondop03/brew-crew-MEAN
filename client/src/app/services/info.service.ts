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
}
