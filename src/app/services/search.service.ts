import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public userSearchObjects = [];


  constructor(private http: HttpClient) { }


  postAllWords(body){
    let path = body.url.substr(21);
    let mySite = "https://teixeiramichael.com" + path;

    //creates a body to hold all the words and the url
    body.url = mySite;

    return this.http.post("http://localhost:3000/api/words/page-words", body);
  }

  getResults(word, isCaseSensitive, isPartialMatch){

    let wordToSearch = {
      word: word,
      isCaseSensitive: isCaseSensitive,
      isPartialMatch: isPartialMatch
    } 

    return this.http.post("http://localhost:3000/api/crawler/get-results-of-matching-word", wordToSearch);
  }

  parseWebPage(page){

    let pageToSearch = {
      page: page
    }

    return this.http.post("http://localhost:3000/api/crawler/parse-url", pageToSearch);
  }

  getUserSearches(){

    return this.http.get("http://localhost:3000/api/crawler/user-searches");
  }

}
