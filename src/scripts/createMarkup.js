export function createMarkup(data) {
  return `<h2>${data.name}</h2>
      <p>Країна</p>
      <div>
        <p>Температура, °C</p>
        <p>Відчувається як</p>
        <p>Вологість, %</p>
        <p>Вітер, м/сек</p>
        <p>Схід сонця</p>
        <p>Захід сонця</p>
      </div>
      <div>
        <p>${data.main.temp}</p>
        <p>${data.main.temp}</p>
        <p>${data.main.humidity}</p>
        <p>${data.wind.speed}</p>
        <p>${data.sys.sunrise}</p>
        <p>${data.sys.sunset}</p>
      </div>`;
}
