import { ApiService } from './scripts/weatherApi';
import { createMarkup } from './scripts/createMarkup';
const apiService = new ApiService();

async function onSearch() {
  try {
    const data = await apiService.fetchWeather();
    console.log(data);
    console.log(data.name);
    const markup = createMarkup();
    console.log(markup);
  } catch (error) {
    console.log(error);
  }
}

onSearch();
