import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../services/search.service";

@Component({
  selector: 'app-dummy-page-two',
  templateUrl: './dummy-page-two.component.html',
  styleUrls: ['./dummy-page-two.component.scss']
})
export class DummyPageTwoComponent implements OnInit {

  constructor(private _ss: SearchService) { }

  ngOnInit() {

      let textArr: string[] = document.body.textContent.split(" ")

      let body = {
        url: window.location.href,
        wordsOnPage: textArr,
        title: "Dummy Page One",
        description: "Page that contains additional words to search for phase 5",
        isModified: true
      }

      this._ss.postAllWords(body).subscribe((response) => {
        console.log(response);
      })

  }

}
