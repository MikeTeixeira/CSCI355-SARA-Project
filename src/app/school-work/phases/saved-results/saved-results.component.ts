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

  constructor(private _fs: FileService, private _http: HttpClient) {

    this.savedResults = this._fs.savedResults;
   }

  ngOnInit() {
  }

  //Creates a file from the stored results the user adds
  //Beginning with downloading the file as JSON
  createFileAndDownload(){
      let body = {
        results: this.savedResults,
        fileType: this.selectedFileType,
      }

      let fileType = this.selectedFileType;


    if(fileType == "application/json"){

      this._fs.createAndDownloadJSONFile(body).subscribe(
        data => saveAs(data, "saved-results.json"),
        error => this.hasErrorDownloading = true
      );
    }



    //Create a file to download as CSV
    if(fileType === "text/csv"){
      this._fs.createAndDownloadCSVFile(body).subscribe(
        res => saveAs(res, "savedResultsCsv.csv"),
        error => this.hasErrorDownloading = true  
      );
    }

    //Create a file to download as XML
    if(fileType == "text/xml"){
      this._fs.createAndDownloadFile(body).subscribe(
        res => saveAs(res, "savedResultsXml.xml"),
        error => this.hasErrorDownloading = true
      )
    }

  }

  //When user selects a file type, we assign it to allow the user
  //to download the specified file type with the saved results
  onSelectChange(selected){
    this.selectedFileType = selected;
    
  }

}
