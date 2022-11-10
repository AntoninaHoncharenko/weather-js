import axios from 'axios';
const KEY = '228ad8d0319cc220638927b04c717d92';

export class ApiService {
  constructor() {
    this.searchQuery = '';
    this.searchLat = null;
    this.searchLon = null;
  }

  async fetchWeatherByCoords() {
    const KEY = '228ad8d0319cc220638927b04c717d92';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.searchLat}&lon=${this.searchLon}&appid=${KEY}&units=metric`;

    const { data } = await axios.get(url);
    return data;
  }

  async fetchWeatherForecast() {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${this.searchLat}&lon=${this.searchLon}&exclude=minutely,current,hourly&appid=${KEY}&units=metric`;

    const { data } = await axios.get(url);
    return data;
  }

  async fetchWeatherByQuery() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchQuery}&appid=${KEY}&units=metric`;

    const { data } = await axios.get(url);
    return data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get lat() {
    return this.searchLat;
  }

  set lat(newLat) {
    this.searchLat = newLat;
  }

  get lon() {
    return this.searchLon;
  }

  set lon(newLon) {
    this.searchLon = newLon;
  }
}
