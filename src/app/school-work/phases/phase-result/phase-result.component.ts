import { Component, OnInit, HostListener, Input } from '@angular/core';
import { phaseOneResults } from './placeholder-results-data';


@Component({
  selector: 'app-phase-result',
  templateUrl: './phase-result.component.html',
  styleUrls: ['./phase-result.component.scss']
})
export class PhaseResultComponent implements OnInit {

  public results = phaseOneResults;
  public isLargeDisplay: boolean = false;
  

  constructor() { }

  ngOnInit() {
    if(window.innerWidth >= 870){
      this.isLargeDisplay = true;
    } else {
      this.isLargeDisplay = false;
    }
  }



  @HostListener("window:resize", ['$event'])
  windowResize(event){
    let currentScreenSize = event.currentTarget.outerWidth;

    this.isLargeDisplay = currentScreenSize >= 870 ? true : false;
  }

  onSubmit(e){

  }


}
