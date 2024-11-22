import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WaetherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit{
  initialCityName = 'São Paulo';
  waetherDatas!:  WaetherDatas;
  
  constructor(private weatherService: WeatherService) {}

  // executar toda vez que inicia a aplicacao
  ngOnInit(): void {
    this.getWheaterDatas(this.initialCityName);
  }

  getWheaterDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next: (response) => {
        response && (this.waetherDatas = response)
      },
      error: (error) => console.log(error),
    })
  }

}
