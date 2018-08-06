import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  breweries:Array<any>;
  beers:Array<any>;

  theNewBeerEntry: any = {};
  theNewBreweryEntry: any = {};

  constructor(private theService: InfoService) { }

  addNewBeer(){
    this.theService.createBeer(this.theNewBeerEntry)
    .subscribe((response)=>{
      this.theNewBeerEntry = {};
      this.allBeers();
      console.log('This======>' + response + "<==== was added into the collection")
    });
  }

  addNewBrewery(){
    this.theService.createBrewery(this.theNewBreweryEntry)
    .subscribe((response)=>{
      this.theNewBreweryEntry = {};
      this.allBreweries();
      console.log('This======>' + response + "<==== was added into the collection")
    });
  }

  allBeers(){
    this.theService.allBeers()
    .subscribe((res)=>{
      this.beers = res;
    });
  }

  allBreweries(){
    this.theService.allBreweries()
    .subscribe((res)=>{
      this.breweries = res;
    });
  }

  ngOnInit() {
    this.allBeers();
    this.allBreweries();
  }

}
