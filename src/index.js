/* eslint-disable import/no-cycle */
import "./style.css";
import { bindLocationSuggestionsDropDownEvents  } from "./location-suggestions-drop-down";
import { getWeatherData, getLocationSuggestions } from "./getForecastData";



bindLocationSuggestionsDropDownEvents();
// bindLocationSuggestionSelectEvent();



function callGetLocationSuggestions(e){
  e.preventDefault();
  const userInput = document.querySelector("#location-search").value
  if (userInput !== ""){
    getLocationSuggestions(userInput)
  }
}

function callGetWeatherData(e){
  e.preventDefault();
  const userInput = document.querySelector("#location-search").value
  getWeatherData(userInput);
}

document.querySelector("#location-search-form").addEventListener("submit", callGetWeatherData)
document.querySelector("#location-search").addEventListener("input", callGetLocationSuggestions)
