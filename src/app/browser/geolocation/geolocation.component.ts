import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {

  public latitude: string;
  public longitude: string;

  constructor() { }

  ngOnInit() {
    if(window.navigator.geolocation){
      navigator.geolocation.getCurrentPosition((res) => {

        setTimeout(() => {
          this.latitude = "" + res.coords.latitude;
          this.longitude = "" + res.coords.longitude;
        },500)
      })
    }
    
  }


}
