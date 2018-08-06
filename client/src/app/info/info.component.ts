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
    this.theService.addNewBeer(this.theNewBeerEntry)
    .subscribe((response)=>{
      this.theNewBeerEntry = {};
      this.getBeerEntries();
      console.log('This======>' + response + "<==== was added into the collection")
    });
  }

  addNewBrewery(){
    this.theService.addNewBrewery(this.theNewBreweryEntry)
    .subscribe((response)=>{
      this.theNewBreweryEntry = {};
      this.getBreweryEntries();
      console.log('This======>' + response + "<==== was added into the collection")
    });
  }

  getBeerEntries(){
    this.theService.getBeerEntries()
    .subscribe((res)=>{
      this.beers = res;
    });
  }

  getBreweryEntries(){
    this.theService.getBreweryEntries()
    .subscribe((res)=>{
      this.breweries = res;
    });
  }

  ngOnInit() {
    this.getBeerEntries();
    this.getBreweryEntries();
  }

}
