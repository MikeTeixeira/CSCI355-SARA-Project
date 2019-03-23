import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { UploadService } from 'src/app/services/upload.service';
import {Search} from 'src/app/tsmodels/search';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-phase-three',
  templateUrl: './phase-three.component.html',
  styleUrls: ['./phase-three.component.scss']
})
export class PhaseThreeComponent implements OnInit {

private URL = "http://localhost:3000/api/uploads/file";
public uploader : FileUploader = new FileUploader({url: this.URL});
attachmentList : any = [];

  constructor() {
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

        console.log(response, item);
      this.attachmentList.push(JSON.parse(response));
    }
  }





  ngOnInit() {

  }


}
