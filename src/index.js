import { ApiService } from './scripts/weatherApi';
import { createMarkup } from './scripts/createMarkup';
const apiService = new ApiService();

const refs = {
  searchForm: document.querySelector('.search-form'),
  weatherCard: document.querySelector('.weather-card'),
};

console.log(refs.searchForm);

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  apiService.query = event.currentTarget.elements.searchQuery.value;
  console.log(apiService.query);

  if (apiService.query === '') {
    return;
  }

  refs.searchForm.reset();

  try {
    const data = await apiService.fetchWeather();
    console.log(data);
    const markup = createMarkup(data);
    refs.weatherCard.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}
