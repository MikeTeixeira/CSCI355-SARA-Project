import { Injectable } from '@angular/core'
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { Subject } from 'rxjs/internal/Subject';
import { EventEmitter } from 'events';
import { environment } from '../../environments/environment';
import { Promise } from 'q';


@Injectable({
  providedIn: 'root'
})

export class FileService {

  private URL: string = "http://localhost:3000/api/file/create";
  public uploader: FileUploader = new FileUploader({url: this.URL});

  private GOOGLE_KEY = environment.GOOGLE_API_KEY;
  private GOOGLE_CX = environment.GOOGLE_CX_KEY;
  private GOOGLE_URL = environment.GOOGLE_URL;

  

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

    return this.http.get(`http://localhost:3000/api/file/retrieve/${fileName}`);
    // return this.http.get(`./assets/file-uploads/${fileName}`);
  };


  //creates a file based off the search results a user wishes to keep
  //return of type blob is needed for a file format
  createAndDownloadFile(savedResults){
    return this.http.post('http://localhost:3000/api/file/create', savedResults, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }


  //Uses googles search custom api to pull in custom queries
  googleSearchApi(userSearch){
    return this.http.get(`
    ${this.GOOGLE_URL}key=${this.GOOGLE_KEY}&cx=${this.GOOGLE_CX}&q=${userSearch}`)
  }

  



}

