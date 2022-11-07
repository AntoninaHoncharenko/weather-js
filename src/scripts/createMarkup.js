import { format } from 'date-fns';

export function createMarkup({ name, weather, main, wind, sys, dt }) {
  return /*html*/ `<div class="title-wrap">
  <h2 class="title">${name}</h2>
  <p class="date">${format(new Date(dt * 1000), 'dd LLLL yyy')}</p>
  </div>
  <div class="main-info-container">
  
  <div class="main-info-wrap">
        <div class="temp-wrap">
          <p class="main-temp">${main.temp.toFixed(0)} °C</p>
          <p class="main-temp-feels">Feels like ${main.feels_like.toFixed(
            0
          )} °C</p>
          
  </div>
          <div class="img-container">
            <img class="icon"
              src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"
              alt="a"
              width="130" height="130"
            />
            </div>
          </div>
    <div class="info-container">
      <div class="parameters">
        <p class="info">Humidity</p>
        <p class="info">Wind</p>
        <p class="info">Sunrise</p>
        <p class="info">Sunset</p>
      </div>
      <div class="values">
        <p class="info">${main.humidity} %</p>
        <p class="info">${wind.speed.toFixed(0)} m/s</p>
        <p class="info">${format(new Date(sys.sunrise * 1000), 'HH:mm')}</p>
        <p class="info">${format(new Date(sys.sunset * 1000), 'HH:mm')}</p>
      </div>
      </div>
    </div>`;
}
