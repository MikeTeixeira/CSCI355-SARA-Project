import { Injectable } from '@angular/core'
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { Search } from 'src/app/tsmodels/search';
import {FileUploadModule} from 'ng2-file-upload';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FileService {




  constructor(private http: HttpClient) { 
  }


  downloadFile(file: String){
    let body = {filename: file};

    return this.http.post('http://localhost:3000/api/file/download', body, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  
}
