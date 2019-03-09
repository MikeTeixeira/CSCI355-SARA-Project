import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phase-one',
  templateUrl: './phase-one.component.html',
  styleUrls: ['./phase-one.component.scss']
})
export class PhaseOneComponent implements OnInit {

  public phaseOneCount: number = 10;

  constructor() { }

  ngOnInit() {
  }

}
