import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  public href: string = " ";
  public hostName: string;
  public pathName: string;
  public protocol: string;

  constructor() { }

  ngOnInit() {

    this.href = window.location.href;
    this.hostName = window.location.hostname;
    this.pathName = window.location.pathname;
    this.protocol = window.location.protocol;
  }

}
