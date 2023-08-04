import getForecastWeatherData, { getLocationAutocomplete } from "./getForecastData";
import "./style.css";
import currentWeatherPageController from "./current-weather-page";
import autoCompleteRender from "./location-search-bar";


async function getData(location) {
  try {
    const data = await getForecastWeatherData(location);
    currentWeatherPageController(data)
  } catch (error) {
    console.log(error);
  }
}

async function getLocation(location) {
  try {
    const data = await getLocationAutocomplete(location);
    // console.log(data)
    autoCompleteRender(data)
  } catch (error) {
    console.log(error);
  }
}

function callGetLocation(e){
  e.preventDefault();
  const userInput = document.querySelector("#location-search").value
  getLocation(userInput)
}

function callGetData(e){
  e.preventDefault();
  const userInput = document.querySelector("#location-search").value
  getData(userInput);
}

document.querySelector("#location-search-form").addEventListener("submit", callGetData)
document.querySelector("#location-search").addEventListener("input", callGetLocation)
