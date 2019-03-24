import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from 'src/app/services/file.service';
import {Search} from 'src/app/tsmodels/search';
import { Observable } from 'rxjs/internal/Observable';
import {saveAs} from 'file-saver';
import { readJson } from '../../../utils/util';

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

  constructor(private _fileService: FileService, private http: HttpClient) {
    console.log(location.pathname);
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {


        // let data;
        // let fileName = item.file.name;
        // let filePath = `/Users/michaelteixeira/Desktop/Portfolio/portfolio/file-uploads/${fileName}`;

        // readJson(filePath, (result) => {
        //   data = JSON.parse(result);
        //   console.log(data);
        // });
   
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
