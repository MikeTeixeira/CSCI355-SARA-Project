import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  public locationData: string = " ";

  constructor() { }

  ngOnInit() {

    this.locationData = window.location.href;
    
  }

}
