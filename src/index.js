import getForecastWeatherData from "./getForecastData";
import "./style.css";
import currentWeatherPageController from "./current-weather-page";


async function getData(location) {
  try {
    const data = await getForecastWeatherData(location);
    currentWeatherPageController(data)
  } catch (error) {
    console.log(error);
  }
}


function callGetData(e){
  e.preventDefault()
  const userInput = document.querySelector("#location-search").value
  getData(userInput);
}

document.querySelector("#location-search-form").addEventListener("submit", callGetData)