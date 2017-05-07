import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../providers/weather.service';
@Component({
  selector: 'weather-details-component',
  templateUrl: './weather-details-component.component.html',
  styleUrls: ['./weather-details-component.component.css']
})
export class WeatherDetailsComponentComponent implements OnInit {

  constructor(private weatherService : WeatherService) {
    this.location = "Hyderabad";
    this.date  = Date.now();
    this.description = "Partly Cloudy";
    this.celsius = 40;
    this.precipitation = 20;
    this.humidity = 10;
    this.wind = 3;
   }

  ngOnInit() {
    this.getLocation();
    this.weatherService.getWeatherByGeoLoc(this.latitude,this.longitude)
    .subscribe(report=>this.weather_report = report);

    console.log("JSON Response: "+ JSON.stringify(this.weather_report));

  }
  location : string;
  date : number;
  description : string;
  celsius : number;
  precipitation : number;
  humidity : number;
  wind : number;
  latitude : string;
  longitude : string;

  weather_report : JSON ;

  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
    }     
  }
  showPosition(position){
    console.log("check :"+position.coords.latitude);
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }

}