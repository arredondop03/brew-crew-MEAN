import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers:Array<any>;

  theNewBeerEntry: any = {};

  constructor(private theService: BeerService) { }

  addNewBeer(){
    this.theService.createBeer(this.theNewBeerEntry)
    .subscribe((response)=>{
      this.theNewBeerEntry = {};
      this.allBeers();
      console.log('This======>' + response + "<==== was added into the collection")
    });
  }

  allBeers(){
    this.theService.allBeers()
    .subscribe((res)=>{
      this.beers = res;
    });
  }
  ngOnInit() {
    this.allBeers();
  }

}
