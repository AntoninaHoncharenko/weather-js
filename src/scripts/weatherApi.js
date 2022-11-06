import axios from 'axios';

export class ApiService {
  constructor() {
    this.searchQuery = '';
  }

  async fetchWeatherByQuery() {
    const KEY = '228ad8d0319cc220638927b04c717d92';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.searchQuery}&appid=${KEY}&units=metric`;

    const { data } = await axios.get(url);
    return data;
  }

  // async fetchWeatherByCoords(lat, lon) {
  //   const KEY = '228ad8d0319cc220638927b04c717d92';
  //   const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`;

  //   const { data } = await axios.get(url);
  //   return data;
  // }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
