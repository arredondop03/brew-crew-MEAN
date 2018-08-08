import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  thatOneReview: any;
  // beerEntry: any = {};
  newReview: any = {};
  userReview: any = {};

  constructor(private viewService: ReviewService) { }

  ngOnInit() {
    this.thatBeerReview()
  }

  thatBeerReview(){
    // console.log(this.beerReview)
    this.viewService.beerReview()
    .subscribe((res) =>{
      this.thatOneReview = res.reverse();
    })
  }

  aNewReview(beerId){
    // console.log(this.beerReview)
    this.viewService.addReview(beerId)
    .subscribe((res) =>{
      this.thatBeerReview()
    })
  }

  deleteReview(beerId, reviewId){
    // beerId: id
    
    this.viewService.removeReview(beerId, reviewId)
    .subscribe((res) => {this.thatOneReview = {}})
  }user
}
