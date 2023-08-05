import getForecastWeatherData, { getLocationSuggestions } from "./getForecastData";
import "./style.css";
import currentWeatherPageController from "./current-weather-page";
import renderLocationSuggestions from "./location-search-bar";


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
    const data = await getLocationSuggestions(location);
    // console.log(data)
    renderLocationSuggestions(data)
  } catch (error) {
    console.log(error);
  }
}

function callGetLocation(e){
  e.preventDefault();
  const userInput = document.querySelector("#location-search").value
  if (userInput !== ""){
    getLocation(userInput)
  }
}

function callGetData(e){
  e.preventDefault();
  const userInput = document.querySelector("#location-search").value
  getData(userInput);
}

document.querySelector("#location-search-form").addEventListener("submit", callGetData)
document.querySelector("#location-search").addEventListener("input", callGetLocation)
