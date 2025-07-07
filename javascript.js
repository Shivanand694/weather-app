const userInput = document.getElementById("input");
const button = document.getElementById("search-btn");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

async function getData(params) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=fbaf0b4b9af4472aa5263842250707&q=${params}&aqi=yes`
  );
  return await response.json();
}

button.addEventListener("click", async function () {
  let value = userInput.value;
  try {
    let result = await getData(value);
    console.log(result);
    temp.innerText = `${result.current.temp_c}°C`;
    city.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    wind.innerText = `${result.current.wind_kph} km/h`;
    humidity.innerText = `${result.current.humidity}%`;
  } catch (error) {
    temp.innerText = `--`;
    city.innerText = `City not found`;
    wind.innerText = `--`;
    humidity.innerText = `--`;
    console.error("Error fetching weather:", error);
  }
});
