import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-phase-one',
  templateUrl: './phase-one.component.html',
  styleUrls: ['./phase-one.component.scss']
})
export class PhaseOneComponent implements OnInit {

  public displayScrollUp: boolean = false;


  constructor() { }

  ngOnInit() {
    
  }

  @HostListener("window:scroll", [])
  onWindowScroll(){
    let offset = window.pageYOffset;
    let searchBoxHeight = document.getElementById("search-bar").offsetHeight;

    if(offset > searchBoxHeight){
      this.displayScrollUp = true;
      console.log(offset);
    } else {
      this.displayScrollUp = false;
    }
  }

  scrollTop(el: HTMLElement){
    el.scrollIntoView();
  }

}
