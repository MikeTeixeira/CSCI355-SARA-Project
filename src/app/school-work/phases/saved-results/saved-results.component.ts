import { Component, OnInit, Input } from '@angular/core';
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
  public selectedFileType: string;

  public fileTypes: any[] = [
    {type: "default",
    display: "Pick A File Type"},
    {type: 'application/json',
    display: 'JSON'},
    {type: 'text/csv',
    display: 'CSV'},
    {type: 'text/xml',
    display: 'XML'},
  ];

  @Input()
  googleSearchResults: any[];

  constructor(private _fs: FileService, private _http: HttpClient) {

    this.savedResults = this._fs.savedResults;
   }

  ngOnInit() {
  }

  //Creates a file from the stored results the user adds
  //Downloads the specified file based on the filetype
  createFileAndDownload(){
      let body = {
        results: this.savedResults,
        fileType: this.selectedFileType,
      }

      let fileType = this.selectedFileType;
      let fileEnding;

      if(fileType == "application/json"){
        fileEnding = ".json"
      } else if(fileType == "text/csv"){
        fileEnding = ".csv";
      } else if(fileType == "text/xml"){
        fileEnding = ".xml";
      }

      this._fs.createAndDownloadFile(body).subscribe(
        data => saveAs(data, `saved-results${fileEnding}`),
        error => this.hasErrorDownloading = true
      );
    }


  //When user selects a file type, we assign it to allow the user
  //to download the specified file type with the saved results
  onSelectChange(selected){
    this.selectedFileType = selected;
    
  }

}
