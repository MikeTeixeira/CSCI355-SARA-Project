import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { HttpClient } from '@angular/common/http';
import {saveAs} from 'file-saver';
import { HttpHeaders } from '@angular/common/http/';

@Component({
  selector: 'app-saved-results',
  templateUrl: './saved-results.component.html',
  styleUrls: ['./saved-results.component.scss']
})
export class SavedResultsComponent implements OnInit {

  public savedResults: any[] = [];
  public errorDownloadMessage: string = "There's been a problem downloading your saved search results";
  public hasErrorDownloading: boolean = false;

  constructor(private _fs: FileService, private _http: HttpClient) {

    this.savedResults = this._fs.savedResults;
   }

  ngOnInit() {
  }

  //Creates the file and downloads
  createFileAndDownload(){

    let body = {
      results: this.savedResults,
      fileType: "application/json",
    }

    this._fs.createAndDownload(body).subscribe(
      data => saveAs(data, "saved-results.json"),
      error => this.hasErrorDownloading = true
    );
  }

}
