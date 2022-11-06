import { format } from 'date-fns';

export function createMarkup({ name, weather, main, wind, sys }) {
  return /*html*/ `<div class="title-container">
      <h2>${name}</h2>
      <div class="img-container">
        <img
          src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"
          alt="a"
        />
      </div>
    </div>
    <div class="conrainer">
      <div class="parameters">
        <p>Temperature</p>
        <p>Feels like</p>
        <p>Humidity</p>
        <p>Wind, speed</p>
        <p>Sunrise</p>
        <p>Sunset</p>
      </div>
      <div class="values">
        <p>${main.temp.toFixed(0)} °C</p>
        <p>${main.temp.toFixed(0)} °C</p>
        <p>${main.humidity} %</p>
        <p>${wind.speed.toFixed(0)} m/s</p>
        <p>${format(new Date(sys.sunrise * 1000), 'HH:mm')}</p>
        <p>${format(new Date(sys.sunset * 1000), 'HH:mm')}</p>
      </div>
    </div>`;
}
