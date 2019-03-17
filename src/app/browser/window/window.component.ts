import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core/';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  public windowHeight: string;
  public windowWidth: string;

  constructor() { }

  ngOnInit() {
    this.windowHeight = "" + window.innerHeight;
    this.windowWidth =  "" +window.innerWidth;
  }

  @HostListener("window:resize", ['$event'])
  onScreenResize(event){
    this.windowHeight = "" + event.target.innerHeight;
    this.windowWidth = "" + event.target.innerWidth;
  }



}
