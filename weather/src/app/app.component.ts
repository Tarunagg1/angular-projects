import { Component, OnInit } from '@angular/core';
import { WeatherDataModel } from './models/weatherModel';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherData?: WeatherDataModel;
  cityName: string = "London";

  constructor(private weatherServide: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }

  onSubmit() {
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }

  getWeatherData(cityName: string) {
    this.weatherServide.getWeatherData(cityName).subscribe({
      next: (result) => {
        this.weatherData = result;
      },
    });
  }
}
