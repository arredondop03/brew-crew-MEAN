import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../services/brewery.service';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {

  breweries:Array<any>;
  theNewBreweryEntry: any = {};

  constructor(private theService: BreweryService) { }

  addNewBrewery(){
    this.theService.createBrewery(this.theNewBreweryEntry)
    .subscribe((response)=>{
      this.theNewBreweryEntry = {};
      this.allBreweries();
      console.log('This======>' + response + "<==== was added into the collection")
    });
  }

  allBreweries(){
    this.theService.allBreweries()
    .subscribe((res)=>{
      this.breweries = res;
    });
  }

  ngOnInit() {
      this.allBreweries();
  }

}
