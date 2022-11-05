import axios from 'axios';

export class ApiService {
  constructor() {
    this.searchQuery = '';
  }

  async fetchWeather() {
    const KEY = '228ad8d0319cc220638927b04c717d92';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.searchQuery}&appid=${KEY}`;

    const { data } = await axios.get(url);
    return data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
