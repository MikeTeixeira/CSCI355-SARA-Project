import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-phase-one',
  templateUrl: './phase-one.component.html',
  styleUrls: ['./phase-one.component.scss']
})
export class PhaseOneComponent implements OnInit {

  public displayScrollUp: boolean = false;
  public isLargeDisplay: boolean = false;



  constructor() { }

  ngOnInit() {
    this.isLargeDisplay = window.innerWidth >= 870 ? true : false;
  }

  @HostListener("window:resize", ['$event'])
  onResize(event){
    let currentScreenSize = event.currentTarget.outerWidth;

    if(currentScreenSize >= 870){
      this.isLargeDisplay = true;
    } else {
      this.isLargeDisplay = false;
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll(){
      if(!this.isLargeDisplay){
      let offset = window.pageYOffset;
      let searchBoxHeight = document.getElementById("search-bar").offsetHeight;

      if(offset > searchBoxHeight){
        this.displayScrollUp = true;
        // console.log(offset);
      } else {
        this.displayScrollUp = false;
      }
    }
  }

  scrollTop(el: HTMLElement){
    el.scrollIntoView();
  }

}
