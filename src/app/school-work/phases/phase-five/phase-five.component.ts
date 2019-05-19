import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { FileService } from '../../../services/file.service';


@Component({
  selector: "app-phase-five",
  templateUrl: "./phase-five.component.html",
  styleUrls: ["./phase-five.component.scss"]
})
export class PhaseFiveComponent implements OnInit {
  public searchResults = [];
  public searchHistory = [];

  public isCaseSensitive = false;
  public isPartialMatch = false;

  constructor(private _ss: SearchService, private _fs: FileService) {

  }

  ngOnInit() {

  }

  getSearchInput(input: HTMLInputElement) {
    let inputValue = input.value;

    this.searchHistory.push(inputValue);

    

    this._ss.getResults(inputValue, this.isCaseSensitive, this.isPartialMatch).subscribe(res => {
      this.searchResults = res.pages;

      console.log(this.searchResults);
    });
  }

  saveResult(result: any) {
    let formattedResult = {
      title: result.title,
      description: result.description,
      url: result.url
    };

    this._fs.savedResults.push(formattedResult);
  }
}
