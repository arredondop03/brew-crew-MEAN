import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../services/brewery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {

  breweries:Array<any>;
  theNewBreweryEntry: any = {};
  theUserId: any = {};

  constructor(private myActivatedRoute: ActivatedRoute, private theService: BreweryService) { }

  ngOnInit() {
    this.allBreweries();
  }

  addNewBrewery(){
    this.theService.createBrewery(this.theNewBreweryEntry, this.theUserId)
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


}
