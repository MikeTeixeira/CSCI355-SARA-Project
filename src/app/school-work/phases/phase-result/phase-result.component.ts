import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { phaseOneResults } from './placeholder-results-data';


@Component({
  selector: 'app-phase-result',
  templateUrl: './phase-result.component.html',
  styleUrls: ['./phase-result.component.scss']
})
export class PhaseResultComponent implements OnInit {

  public phaseOne: boolean = false;
  public results = phaseOneResults;
  public isLargeDisplay: boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
    const url = this.router.url;

    if(url === "/portfolio/queens-college/phases/1"){
      this.phaseOne = true;
    }

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
