import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phases-card',
  templateUrl: './phases-card.component.html',
  styleUrls: ['./phases-card.component.scss']
})
export class PhasesCardComponent implements OnInit {

  public phases:any[] = [
    {
      title: "Phase One",
      description: "Displays a hard coded search result with multiple values",
    },
    {
      title: "Phase Two",
      description: "Displays a hard coded search result with multiple values",
    }, 
    {
      title: "Phase Three",
      description: "Displays a hard coded search result with multiple values",
    } ,
    {
      title: "Phase Four",
      description: "Displays a hard coded search result with multiple values",
    },  
    {
      title: "Phase Five",
      description: "Displays a hard coded search result with multiple values",
    }]


  constructor() { }


  ngOnInit() {
  
  }

}
