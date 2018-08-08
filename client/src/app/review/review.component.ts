import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from '../services/review.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
@Input() thatBeer: any;

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
  
  //add
  aNewReview(beerId){
    this.viewService.addReview(beerId, this.userReview)
    .subscribe((res) =>{
      this.thatBeerReview();
      location.reload();
    })
  }

  //edit
  changeReview(beerId, reviewId){
    this.viewService.editReview(beerId, reviewId)
    .subscribe(() =>{

    })
  }


  deleteReview(beerId, reviewId){
    // beerId: id
    
    this.viewService.removeReview(beerId, reviewId)
    .subscribe((res) => {this.thatOneReview = {}})
  }user
}
