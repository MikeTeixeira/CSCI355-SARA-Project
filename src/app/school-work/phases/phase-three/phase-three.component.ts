import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from 'src/app/services/file.service';
import {Search} from 'src/app/tsmodels/search';
import { Observable } from 'rxjs/internal/Observable';
import {saveAs} from 'file-saver';
import { readJson } from '../../../utils/util';
import {Location} from '@angular/common';

@Component({
  selector: 'app-phase-three',
  templateUrl: './phase-three.component.html',
  styleUrls: ['./phase-three.component.scss'],
  providers: [FileService]
})
export class PhaseThreeComponent implements OnInit {

  private URL = "http://localhost:3000/api/file/upload";
  public uploader : FileUploader = new FileUploader({url: this.URL});
  public attachmentList : any = [];
  public fileResults: any[] = [];
  public isUploaded: boolean = false;
  public errorFindingFile: any;

  public displayResult: boolean = false;


  constructor(private _fileService: FileService) {
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

    }
  }

  ngOnInit() {

  }

  //Helper function to grab the incoming file
  retrieveFile(incomingFile){
    this.displayResults(incomingFile);
  }


  //Checks to see if the current file is in the local dircetory onto the server
  //If so, the file is pulled and read from
  displayResults(incomingFile){
      this._fileService.checkIfFileExists(incomingFile).subscribe((res: any) => {
      if(res){
        this.isUploaded = true;
        this.fileResults = res.results;
      } else {
        this.isUploaded = false;
        this.errorFindingFile = `File: ${incomingFile.file.name} was not found`; 
      }
    });
  }

  removeDisplayData(item: any){
    this.uploader.removeFromQueue(item);
  }







  //Grab the file we want to download from the local directory
  download(id) {
    let filename = this.attachmentList[id].uploadname;

    this._fileService.downloadFile(filename)
    .subscribe(
      data => saveAs(data, filename),
      error => console.log(error),
    )
  }


}
