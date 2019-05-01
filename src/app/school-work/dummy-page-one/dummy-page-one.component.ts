import { Component, OnInit } from '@angular/core';
import { SearchService} from '../../services/search.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dummy-page-one',
  templateUrl: './dummy-page-one.component.html',
  styleUrls: ['./dummy-page-one.component.scss']
})
export class DummyPageOneComponent implements OnInit {
  
  // private originalHtml = document.getElementById("content").innerHTML;
  private hasSearchResults: boolean = false;

  constructor(private _ss: SearchService) { 

  }

  // getBoundingClientRect -- gets the box-shape of the content
  //Get x and y from offsetleft and offsettop
  ngOnInit() {

  }




    userSearch(userSearch: HTMLInputElement){
      
      if(this.hasSearchResults){
        // document.getElementById("content").innerHTML = this.originalHtml;
      }

      //replaces all words in the inner text
      document.getElementById("content").innerHTML = document.getElementById("content")
      .innerHTML.replace(new RegExp(`${userSearch.value}`, "ig"), `<span class='searchedWord'>${userSearch.value}</span>`);
      // let textArr: string[] = document.body.textContent.split(" ");

      let spans: any =  document.getElementsByClassName("searchedWord")

      //Grabs the position of the element from the html
      let i = 0;
      for(let id in spans){
          if(Number(i) <= Number(id)){
          let leftOffset: any = spans[i].offsetLeft;
          let topOffset: any = spans[i].offsetTop;

          console.log(`Position of ${i} at ${spans[i].textContent} is at: ` + leftOffset + " " + topOffset);
          spans[id].style.backgroundColor = "green";
          i++;
        }
      }

      this.hasSearchResults = true;
    }

}
