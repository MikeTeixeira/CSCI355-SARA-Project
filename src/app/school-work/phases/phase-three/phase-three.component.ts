import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from 'src/app/services/file.service';
import {Search} from 'src/app/tsmodels/search';
import { Observable } from 'rxjs/internal/Observable';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-phase-three',
  templateUrl: './phase-three.component.html',
  styleUrls: ['./phase-three.component.scss'],
  providers: [FileService]
})
export class PhaseThreeComponent implements OnInit {

private URL = "http://localhost:3000/api/file/upload";
public uploader : FileUploader = new FileUploader({url: this.URL});
attachmentList : any = [];

  constructor(private _fileService: FileService) {
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

        console.log(response, item);
      this.attachmentList.push(JSON.parse(response));
    }
  }

  ngOnInit() {

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
