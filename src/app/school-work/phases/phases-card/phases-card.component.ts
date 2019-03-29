import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phases-card',
  templateUrl: './phases-card.component.html',
  styleUrls: ['./phases-card.component.scss']
})
export class PhasesCardComponent implements OnInit {

  public phases:any[] = [
    {
      title: "Phase Two",
      url: "/portfolio/queens-college/phases/1",
      description: "Displays a hard coded search result with multiple values",
    }, 
    {
      title: "Phase Three",
      url: "/portfolio/queens-college/phases/3",
      description: "Displays a hard coded search result with multiple values",
    } ,
    {
      title: "Phase Four",
      url: "/portfolio/queens-college/phases/4",
      description: "Displays a hard coded search result with multiple values",
    },  
    {
      title: "Phase Five",
      url: "/portfolio/queens-college/phases/5",
      description: "Displays a hard coded search result with multiple values",
    }]


  constructor() { }


  ngOnInit() {
  
  }

}
