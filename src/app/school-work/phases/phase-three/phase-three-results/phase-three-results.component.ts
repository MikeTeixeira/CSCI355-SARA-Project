import { Component, OnInit, HostListener, Input } from '@angular/core';
import {FileService} from 'src/app/services/file.service';

@Component({
  selector: 'app-phase-three-results',
  templateUrl: './phase-three-results.component.html',
  styleUrls: ['./phase-three-results.component.scss'],
  inputs: ['jsonFile']
})
export class PhaseThreeResultsComponent implements OnInit {

  public isLargeDisplay: boolean = false;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth >= 870) {
      this.isLargeDisplay = true;
    } else {
      this.isLargeDisplay = false;
    }

  }

  @HostListener("window:resize", ['$event'])
  windowResize(event) {
    let currentScreenSize = event.currentTarget.outerWidth;

    this.isLargeDisplay = currentScreenSize >= 870
      ? true
      : false;
  }

  onSubmit(e) {}

  }
