import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-phase-four',
  templateUrl: './phase-four.component.html',
  styleUrls: ['./phase-four.component.scss']
})
export class PhaseFourComponent implements OnInit {

  searchResults: any[] = [];



  constructor(public http: HttpClient, private _fs: FileService) { }

  ngOnInit() {
  }



  googleQuery(userSearch: HTMLInputElement){
    this._fs.googleSearchApi(userSearch.value).subscribe((res) => {
      this.searchResults = res.items;


      setTimeout(() => {
      }, 200);

    });
  }
}
