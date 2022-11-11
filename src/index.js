import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ApiService } from './scripts/weatherApi';
import { createMarkup } from './scripts/createMarkup';
import { createMarkupForecast } from './scripts/createMarkupForecast';
import { addSmoothScroll } from './scripts/scroll';

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
  refs.forecastList.classList.add('is-hidden');
  refs.forecastBtn.classList.add('is-hidden');

  if (apiService.query === '') {
    Notify.failure('Enter the city', {
      clickToClose: true,
    });
    return;
  }

  refs.searchForm.reset();

  try {
    const data = await apiService.fetchWeatherByQuery();
    const markup = createMarkup(data);

    refs.weatherCard.classList.remove('is-hidden');
    refs.weatherCard.innerHTML = markup;
  } catch (error) {
    Notify.failure('Enter correct name');
    console.log(error);
  }
}

refs.forecastBtn.addEventListener('click', onForecastBtnClick);

async function onForecastBtnClick() {
  try {
    const { daily } = await apiService.fetchWeatherForecast();
    const forecastMarkup = createMarkupForecast(daily);

    refs.forecastList.innerHTML = forecastMarkup;
    refs.forecastList.classList.remove('is-hidden');
    addSmoothScroll();
  } catch (error) {
    console.log(error);
  }
}
