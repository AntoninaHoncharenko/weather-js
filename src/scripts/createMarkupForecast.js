import { format } from 'date-fns';

export function createMarkupForecast() {
  return /*html*/ `<li class="forecast-item">
        <p class="forecast-date"></p>
        <div class="temp-wrap">
          <p class="forecast-main-temp"></p>
          <img src="#" alt="1" class="forecast-img" />
        </div>
        <p class="forecast-feel-temp"></p>
        <div class="forecast-info-container">
          <div class="forecast-parameters">
            <p class="forecast-info">Humidity</p>
            <p class="forecast-info">Wind</p>
            <p class="forecast-info">Sunrise</p>
            <p class="forecast-info">Sunset</p>
          </div>
          <div class="forecast-values">
            <p class="forecast-info">${main.humidity} %</p>
            <p class="forecast-info">${wind.speed.toFixed(0)} m/s</p>
            <p class="forecast-info">
              ${format(new Date(sys.sunrise * 1000), 'HH:mm')}
            </p>
            <p class="forecast-info">
              ${format(new Date(sys.sunset * 1000), 'HH:mm')}
            </p>
          </div>
        </div>
      </li>`;
}
