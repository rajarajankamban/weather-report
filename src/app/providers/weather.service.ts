import { Injectable }  from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService{
    private weatherAPI = "http://api.openweathermap.org/data/2.5/weather?&APPID=020289a71db3b28c419fdf56aae18e8b";

    constructor(private http:Http){}

    getWeatherByGeoLoc(lat:string,lon:string): Observable <any> {        
       const fullURL = this.weatherAPI + "&lat=" +lat+ "&lon=" +lon; 
       console.log("Long :"+lat);
       console.log("API URL: " + fullURL);
       return this.http.get(fullURL).map(this.extractData);  
    }

    private extractData(res :Response){
        let body =  res.json();
        console.log(JSON.stringify(body)+ "JSON :"+ body );
        return body || {}
    }

}
