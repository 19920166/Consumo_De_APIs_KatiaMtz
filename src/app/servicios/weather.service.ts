import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'dc30102da306c071be3ce010c955eaca';
  apiKeyNasa = 'ffNdG7thGQxAWOcpxUgnPrMIEvlFlHUSz5xAgjB2';

  NAS: string = '';
  URI: string = '';
  CURP: string = '';

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
    this.NAS = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKeyNasa}`;
    this.CURP = `https://us-central1-tuxtepec-8dd4d.cloudfunctions.net/app/entries/`
  }

  getCurp(curp: string){
    return this.httpClient.get(`${this.CURP}${curp}`);
  }

  getWeather(cityName: string, countryCode: string){
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);
  }

  getImageDay(){
    return this.httpClient.get(`${this.NAS}`);
  }
}
