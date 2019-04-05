import { Component, OnInit, HostListener, Input } from '@angular/core';
import {FileService} from 'src/app/services/file.service';

@Component({
  selector: 'app-phase-three-results',
  templateUrl: './phase-three-results.component.html',
  styleUrls: ['./phase-three-results.component.scss'],
  inputs: []
})
export class PhaseThreeResultsComponent implements OnInit {

  public isLargeDisplay: boolean = true;

  

  //The file results are passed in from phaeThree component
  //and displayed on the html file
  @Input()
  fileResults: any[];

  //Fired only when the user clicks displays results
  @Input()
  isUploaded: boolean;

  

  constructor(private fs: FileService) { 


  }

  ngOnInit() {
    if (window.innerWidth >= 870) {
      this.isLargeDisplay = true;
    } else {
      this.isLargeDisplay = false;
    }

  }

  @HostListener("window:resize", ['$event'])
  windowResize(event) {
    let currentScreenSize = event.currentTarget.innerWidth;
    this.isLargeDisplay = currentScreenSize >= 870
      ? true
      : false;

      console.log(this.fileResults);
    
  }



  //Saves the result to an array
  saveResult(result){
    this.fs.savedResults.push(result);
    
  }
}
