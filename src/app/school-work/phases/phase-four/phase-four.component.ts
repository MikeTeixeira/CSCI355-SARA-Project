import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-phase-four',
  templateUrl: './phase-four.component.html',
  styleUrls: ['./phase-four.component.scss']
})
export class PhaseFourComponent implements OnInit {

  public googleSearchResults: any[] = [];

  public isUploaded: boolean = false;



  constructor(public http: HttpClient, private _fs: FileService) { }

  ngOnInit() {
  }



  googleQuery(userSearch: HTMLInputElement){
    this._fs.googleSearchApi(userSearch.value).subscribe((res) => {
      this.googleSearchResults = res.items;


      setTimeout(() => {
      }, 200);

    });
  }


  saveResult(result){
    let formattedResult = {
      title: result.title,
      description: result.snippet,
      url: result.link
    }



    this._fs.savedResults.push(formattedResult);
  }

}
