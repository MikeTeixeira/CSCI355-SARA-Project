import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';


@Component({
  selector: 'app-phase-five',
  templateUrl: './phase-five.component.html',
  styleUrls: ['./phase-five.component.scss']
})
export class PhaseFiveComponent implements OnInit {

  constructor(private _ss: SearchService) { }

  ngOnInit() {
    this._ss.getPresidents().subscribe((res) => {
      console.log(res);
    })
  }

}
