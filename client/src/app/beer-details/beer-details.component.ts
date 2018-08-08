import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service'
import { ReviewService } from '../services/review.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  thatBeer: any;

  thoseReviews: any = [];


  constructor(private theService: BeerService, private myActivated:ActivatedRoute) { }

  ngOnInit() {
    this.myActivated.params.subscribe(params => {
      this.beerDetails(params["id"]);
    });
  }


  beerDetails(beerId){
    this.theService.oneBeer(beerId)
    .subscribe((res)=>{
      this.thatBeer = res.beerInfo;
      this.thoseReviews = res.theReviews;
      // this.thatBeer.review.forEach(oneRewId => {

      // })
    })
  }

  changeBeer(){
    this.theService.editBeer
  }

  removeBeer(breweryId, beerId){
    console.log("Brewery =========", breweryId)
    console.log("BeerId =============================", beerId)
    this.theService.deleteBeer(breweryId, beerId)
    .subscribe((res) => {
      this.thatBeer = {};
      this.thoseReviews = {};
      // this.myActivated
    })
  }


}
