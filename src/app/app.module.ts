import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherCatalogComponentComponent } from './weather-catalog-component/weather-catalog-component.component';
import { WeatherDetailsComponentComponent } from './weather-details-component/weather-details-component.component';
import { WeatherGraphComponentComponent } from './weather-graph-component/weather-graph-component.component';
import {WeatherService} from './providers/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCatalogComponentComponent,
    WeatherDetailsComponentComponent,
    WeatherGraphComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
