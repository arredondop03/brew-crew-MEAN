import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service'

@Component({
  selector: 'app-edit-beer-review',
  templateUrl: './edit-beer-review.component.html',
  styleUrls: ['./edit-beer-review.component.css']
})
export class EditBeerReviewComponent implements OnInit {


  constructor(private viewService: ReviewService) { }

  ngOnInit() {
  }

  changeReview(beerId, reviewId){
    this.viewService.editReview(beerId, reviewId)
    .subscribe()
  }

  
}
