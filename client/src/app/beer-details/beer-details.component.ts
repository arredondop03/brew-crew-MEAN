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

  

  constructor(private theService: BeerService, private myActivated:ActivatedRoute) { }

  ngOnInit() {
    this.myActivated.params.subscribe(params => {
      this.beerDetails(params["id"]);
    });
  }

  
  beerDetails(beerId){
    this.theService.oneBeer(beerId)
    .subscribe((res)=>{
      console.log('beer is: ', res)
      this.thatBeer = res;
      // this.thatBeer.review.forEach(oneRewId => {

      // })
    })
  }



}
