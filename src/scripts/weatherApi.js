import axios from 'axios';

export class ApiService {
  async fetchWeather() {
    const KEY = '228ad8d0319cc220638927b04c717d92';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${KEY}`;

    const { data } = await axios.get(url);
    return data;
  }
}
