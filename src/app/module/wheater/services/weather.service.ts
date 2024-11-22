import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// decorator diz que essa classe pode ser injetada no componente
@Injectable({
  // aonde poderá ser injetada
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'a7b6021fc18e66d121be6dac80f68778';

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }
}
