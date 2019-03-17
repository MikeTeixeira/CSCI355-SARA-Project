import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  public appName: string;
  public product: string;
  public appVersion: string;
  public  userAgent: string;
  public platform: string;
  public language: string

  constructor() { }

  ngOnInit() {

    this.appName = window.navigator.appName;
    this.product = window.navigator.product;
    this.appVersion = window.navigator.appVersion;
    this.userAgent = window.navigator.userAgent;
    this.platform = window.navigator.platform;
    this.language = window.navigator.platform;


  }

}
