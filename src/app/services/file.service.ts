import { Injectable } from '@angular/core'
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { Subject } from 'rxjs/internal/Subject';
import { EventEmitter } from 'events';


@Injectable({
  providedIn: 'root'
})

export class FileService {

  private URL: string = "http://localhost:3000/api/file/create";
  public uploader: FileUploader = new FileUploader({url: this.URL});
  

  //Variables to trigger the saved results
  public savedResults: any[] = [];  
  public savedResultEventEmitter: EventEmitter = new EventEmitter();
  
  constructor(private http: HttpClient) { 

 
  }


  //Downloads the file from our backend
  //Must include blob because it is a file, we add it to the options of the post
  //request header  (url, data, options)
  downloadFile(file: String){
    let body = {filename: file};
    return this.http.post('http://localhost:3000/api/file/download', body, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  //Grabs the file from the local directory
  checkIfFileExists(data){
    let fileName = data.file.name;
    let fileType = data.file.type;
    return this.http.get(`./assets/file-uploads/${fileName}`);
  };

  createAndDownload(body){

    return this.http.post('http://localhost:3000/api/file/create', body, {
      responseType:  'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }
  



}

