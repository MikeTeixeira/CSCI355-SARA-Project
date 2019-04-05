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
  public savedResults: any[] = [];
  public errorFindingFile: any;

  public displayResult: boolean = false;


  constructor(private _fileService: FileService, private http: HttpClient, private location: Location) {
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        if(status === 200){
          this.attachmentList.push(JSON.parse(response));
        }
    }
  }

  ngOnInit() {

  }

  retrieveFile(incomingFile){
    let fileType = incomingFile.file.type;
    this.displayResults(incomingFile);

  }


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







  //Grab the file we want to download
  download(id) {
    let filename = this.attachmentList[id].uploadname;

    this._fileService.downloadFile(filename)
    .subscribe(
      data => saveAs(data, filename),
      error => console.log(error),
    )
  }


}
