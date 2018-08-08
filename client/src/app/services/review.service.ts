import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { jsonpFactory } from '@angular/http/src/http_module';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: Http) { }

  handleError(e){
    return Observable.throw(e.json().message);
  }
  //This one has to go 
  //If you'd like this to stay then we'll need to go back to the back-end
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

  addReview(beerId, data){
    console.log('service: ', beerId, 'data: +++++++ ', data)
    return this.http.post(`http://localhost:3000/api/beers/${beerId}/review/create`, data, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  editReview(beerId, reviewId){
    return this.http.post(`http://localhost:3000/api/beers/${beerId}/review/${reviewId}/edit`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  removeReview(beerId, reviewId){
    return this.http.delete(`http://localhost:3000/api/beers/${beerId}/review/${reviewId}/delete`, {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }
}
