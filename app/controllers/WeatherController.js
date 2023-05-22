import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js"


function _drawWeather() {
  // console.log('Is It Raining', AppState.weather);

  setHTML('weatherIcon', AppState.weather.WeatherTemplate)
  // console.log('DID IT WORK');

}

export class WeatherController {
  constructor() {
    // console.log('Weather is nice outside!');
    this.getWeather()
    AppState.on('weather', _drawWeather)
    
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error)
    }
  }

  toggleTemp() {
    if (AppState.weather.temp == AppState.weather.cDeg) {
      AppState.weather.temp = AppState.weather.fDeg
      AppState.weather.units = "F"
    } else {
      AppState.weather.temp = AppState.weather.cDeg
      AppState.weather.units = "C"
    }
    AppState.emit('weather')
  }
}