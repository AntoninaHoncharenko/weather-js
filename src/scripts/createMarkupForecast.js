import { format } from 'date-fns';

export function createMarkupForecast(daily) {
  const markupList = [];
  for (let i = 1; i <= 5; i += 1) {
    const markup = /*html*/ `<li class="forecast-item">
        <p class="forecast-date">${format(
          new Date(daily[i].dt * 1000),
          'iiii dd.MM'
        )}</p>
        <div class="forecast-main-wrap">
        <div class="temp-forecast-wrap">
          <p class="forecast-min-temp">Min: <span class="forecast-temp">${daily[
            i
          ].temp.min.toFixed(0)} °C</span></p>
          <p class="forecast-max-temp">Max: <span class="forecast-temp">${daily[
            i
          ].temp.max.toFixed(0)} °C</span></p>
        </div>
        <div class="img-wrap">
        <img src="https://openweathermap.org/img/wn/${
          daily[i].weather[0].icon
        }@2x.png" alt="1" class="forecast-img" width="90" height="90"/>
        </div>
        </div>
        <div class="forecast-info-container">
          <div class="forecast-parameters">
            <p class="forecast-info">Humidity</p>
            <p class="forecast-info">Wind</p>
            <p class="forecast-info">Sunrise</p>
            <p class="forecast-info">Sunset</p>
          </div>
          <div class="forecast-values">
            <p class="forecast-info">${daily[i].humidity} %</p>
            <p class="forecast-info">${daily[i].wind_speed.toFixed(0)} m/s</p>
            <p class="forecast-info">
              ${format(new Date(daily[i].sunrise * 1000), 'HH:mm')}
            </p>
            <p class="forecast-info">
              ${format(new Date(daily[i].sunset * 1000), 'HH:mm')}
            </p>
          </div>
        </div>
      </li>`;
    markupList.push(markup);
  }
  const forecastMarkup = markupList.join('');
  return forecastMarkup;
}
