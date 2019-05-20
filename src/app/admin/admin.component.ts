import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {

  public userSearches = [];

  constructor(private _ss: SearchService) {}

  ngOnInit() {
    this._ss.getUserSearches().subscribe((res: any) => {
      this.userSearches = res
    })
  }

  getSearchResults(input: HTMLInputElement) {
    let inputValue = input.value;

    console.log(inputValue);

    this._ss.parseWebPage(inputValue).subscribe((res: any) => {
      console.log(res);
    });
  }
}
