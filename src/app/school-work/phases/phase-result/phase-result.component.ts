import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-phase-result',
  templateUrl: './phase-result.component.html',
  styleUrls: ['./phase-result.component.scss']
})
export class PhaseResultComponent implements OnInit {

  public phaseOne: boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
    const url = this.router.url;

    if(url === "/portfolio/queens-college/phases/1"){
      this.phaseOne = true;
    }
  }

}
