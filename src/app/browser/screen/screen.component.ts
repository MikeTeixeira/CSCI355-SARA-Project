import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  public screenHeight: string;
  public screenWidth: string;
  public availWidth: string;
  public availHeight: string;
  public colorDepth: string;
  public pixelDepth: string;

  constructor() { }

  ngOnInit() {
    this.screenHeight = "" + window.screen.height;
    this.screenWidth = "" + window.screen.width;
    this.availHeight = "" + window.screen.availHeight;
    this.availWidth = "" + window.screen.availWidth;
    this.colorDepth = "" + window.screen.colorDepth;
    this.pixelDepth = "" + window.screen.pixelDepth;

  }

}
