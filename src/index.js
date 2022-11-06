import { ApiService } from './scripts/weatherApi';
import { createMarkup } from './scripts/createMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const apiService = new ApiService();

const refs = {
  searchForm: document.querySelector('.search-form'),
  weatherCard: document.querySelector('.weather-card'),
  forecastBtn: document.querySelector('.forecast-btn'),
};

// async function onGeolocation(lat, lon) {
//   try {
//     const data = await apiService.fetchWeatherByCoords(lat, lat);
//     console.log(data);
//     const markup = createMarkup(data);
//     refs.weatherCard.innerHTML = markup;
//   } catch (error) {
//     console.log(error);
//   }
// }

// navigator.geolocation?.getCurrentPosition(({ coords }) => {
//   console.log(coords);
//   const { latitude, longitude } = coords;
//   onGeolocation(latitude, longitude);
// });

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
    const markup = createMarkup(data);
    refs.weatherCard.classList.remove('is-hidden');
    refs.weatherCard.innerHTML = markup;
    refs.forecastBtn.classList.remove('is-hidden');
  } catch (error) {
    Notify.failure('Enter correct name');
    console.log(error);
  }
}

refs.forecastBtn.addEventListener('click', onForecastBtnClick);

function onForecastBtnClick() {}
