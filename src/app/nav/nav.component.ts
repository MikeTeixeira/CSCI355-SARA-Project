import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  openNav:string = "close";

  constructor() { }

  ngOnInit() {
  }

  triggerNav(){
    
    this.openNav = this.openNav === "open" ? "close": "open";

    console.log(this.openNav);
  }



}
