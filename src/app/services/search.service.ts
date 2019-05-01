import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private pageWordCount: any = {
    "http://teixeiramichael.com/portfolio": {
      url: "http://teixeiramichael.com",
      words: 435
    }
  };
  private url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

  constructor(private http: HttpClient) { }

  
  getPresidents(){
    return this.http.get('http://localhost:3000/api/words/');
  }
}
