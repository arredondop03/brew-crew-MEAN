import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  beerReview: any;
  // beerEntry: any = {};
  newReview: any = {};
  userReview: any = {};

  constructor(private viewService: ReviewService) { }

  ngOnInit() {
    this.thatBeerReview()
  }

  thatBeerReview(){
    console.log(this.beerReview)
    this.viewService.beerReview()
    .subscribe((res) =>{
      this.beerReview = res.reverse();
    })
  }

  aNewReview(){
    // console.log(this.beerReview)
    this.viewService.addReview()
    .subscribe((res) =>{
      this.thatBeerReview()
    })
  }

  changeReview(){
    this.viewService.editReview()
    .subscribe()
  }

  deleteReview(){
    this.viewService.removeReview()
    .subscribe((res) => {this.beerReview = {}
    })
  }
}
