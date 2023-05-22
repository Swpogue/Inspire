import { AppState } from "../AppState.js"
export class Weather{
constructor (data){
this.id = data.id
this.temp = Math.round(data.main.temp - 273.15) 
this.name = data.name
this.icon = data.weather[0].icon
this.description = data.weather[0].description
this.fDeg = Math.round(this.temp * 1.8 + 32)
this.cDeg = this.temp
this.units = "C"
}



get WeatherTemplate(){
  return `
  <div class="card">
  <span style="cursor:pointer" onclick="app.WeatherController.toggleTemp()">${this.temp}${this.units}</span>
  
  ${this.name} <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="">${this.description}
  </div>
  
  `
}
}
