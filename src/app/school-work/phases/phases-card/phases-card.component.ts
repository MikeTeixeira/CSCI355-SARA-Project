import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phases-card',
  templateUrl: './phases-card.component.html',
  styleUrls: ['./phases-card.component.scss']
})
export class PhasesCardComponent implements OnInit {

  public phases: string[] = [{
    "phase-one": {
      title: "Phase One",
      description: "Displays a hard coded search result with multiple values",
    },
    "phase-two":{
      title: "Phase One",
      description: "Displays a hard coded search result with multiple values",
    }, 
    "phase-three":{
      title: "Phase One",
      description: "Displays a hard coded search result with multiple values",
    } ,
    "phase-four": {
      title: "Phase One",
      description: "Displays a hard coded search result with multiple values",
    },  
    "phase-five": {
      title: "Phase One",
      description: "Displays a hard coded search result with multiple values",
    }
  }];

  constructor() { }

  ngOnInit() {
  }

}
