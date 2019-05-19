import { Component, OnInit } from '@angular/core';
import { SearchService} from '../../services/search.service';


@Component({
  selector: 'app-dummy-page-one',
  templateUrl: './dummy-page-one.component.html',
  styleUrls: ['./dummy-page-one.component.scss']
})
export class DummyPageOneComponent implements OnInit {
  
  private lastModified;

  constructor(private _ss: SearchService) { 

  }
  ngOnInit() {
    

      let textArr: string[] = document.body.textContent.split(" ");

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
