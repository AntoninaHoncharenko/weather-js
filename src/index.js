import { ApiService } from './scripts/weatherApi';
import { createMarkup } from './scripts/createMarkup';
import { createMarkupForecast } from './scripts/createMarkupForecast';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const apiService = new ApiService();

const refs = {
  searchForm: document.querySelector('.search-form'),
  weatherCard: document.querySelector('.weather-card'),
  forecastBtn: document.querySelector('.forecast-btn'),
  forecastList: document.querySelector('.forecast-list'),
};

navigator.geolocation.getCurrentPosition(({ coords }) => {
  const { latitude, longitude } = coords;
  apiService.lat = latitude;
  apiService.lon = longitude;
  // console.log(apiService.lat);
  // console.log(apiService.lon);
  onGeolocation();
});

async function onGeolocation() {
  try {
    const data = await apiService.fetchWeatherByCoords();
    const markup = createMarkup(data);
    refs.weatherCard.innerHTML = markup;
    refs.weatherCard.classList.remove('is-hidden');
    refs.forecastBtn.classList.remove('is-hidden');
  } catch (error) {
    console.log(error);
  }
}

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  apiService.query = event.currentTarget.elements.searchQuery.value;

  if (apiService.query === '') {
    Notify.failure('Enter the city', {
      clickToClose: true,
    });
    return;
  }

  refs.searchForm.reset();

  try {
    const data = await apiService.fetchWeatherByQuery();
    refs.forecastBtn.classList.add('is-hidden');
    const markup = createMarkup(data);
    refs.weatherCard.classList.remove('is-hidden');
    refs.weatherCard.innerHTML = markup;
  } catch (error) {
    Notify.failure('Enter correct name');
    console.log(error);
  }
}

refs.forecastBtn.addEventListener('click', onForecastBtnClick);

async function onForecastBtnClick(event) {
  try {
    const { daily } = await apiService.fetchWeatherForecast();
    // console.log(daily);
    // createMarkupForecast(daily);
    // const markup = createMarkupForecast(daily);
    // console.log(markup);
    const forecastMarkup = createMarkupForecast(daily);
    console.log(forecastMarkup);
    refs.forecastList.innerHTML = forecastMarkup;
  } catch (error) {
    console.log(error);
  }
}
