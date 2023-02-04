import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Spinner } from 'spin.js';
import { ApiService } from './scripts/weatherApi';
import { createMarkup } from './scripts/createMarkup';
import { createMarkupForecast } from './scripts/createMarkupForecast';
import { addSmoothScroll } from './scripts/scroll';
import { spinerPlay } from './scripts/spinner';
import { spinerStop } from './scripts/spinner';


const apiService = new ApiService();

const refs = {
  searchForm: document.querySelector('.search-form'),
  weatherCard: document.querySelector('.weather-card'),
  forecastBtn: document.querySelector('.forecast-btn'),
  forecastList: document.querySelector('.forecast-list'),
  // spinner: document.querySelector('.spinner'),
  // loadSpin: document.querySelector('.spin-backdrop'),
};

navigator.geolocation.getCurrentPosition(({ coords }) => {
  const { latitude, longitude } = coords;
  apiService.lat = latitude;
  apiService.lon = longitude;
  onGeolocation();
});

async function onGeolocation() {
  spinerPlay();
  try {
    const data = await apiService.fetchWeatherByCoords();
    const markup = createMarkup(data);
    refs.weatherCard.innerHTML = markup;
    refs.weatherCard.classList.remove('is-hidden');
    refs.forecastBtn.classList.remove('is-hidden');
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }
}

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  spinerPlay();
  apiService.query = event.currentTarget.elements.searchQuery.value;
  refs.forecastList.classList.add('is-hidden');
  refs.forecastBtn.classList.add('is-hidden');

  if (apiService.query === '') {
    Notify.failure('Enter the city', {
      clickToClose: true,
    });
    spinerStop();
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
  } finally {
    spinerStop();
  }
}

refs.forecastBtn.addEventListener('click', onForecastBtnClick);

async function onForecastBtnClick() {
  spinerPlay();
  try {
    const { daily } = await apiService.fetchWeatherForecast();
    const forecastMarkup = createMarkupForecast(daily);

    refs.forecastList.innerHTML = forecastMarkup;
    refs.forecastList.classList.remove('is-hidden');
    addSmoothScroll();
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }
}
