import { Component, OnInit } from '@angular/core';
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


  constructor(private router: Router) { }

  ngOnInit() {
    const url = this.router.url;

    if(url === "/portfolio/queens-college/phases/1"){
      this.phaseOne = true;
    }
  }

  onSubmit(e){

  }


}
