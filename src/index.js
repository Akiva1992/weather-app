/* eslint-disable import/no-cycle */
import "./style.css";
import { bindGetDeviceGeolocationEvent, bindLocationSuggestionsDropDownEvents, getDeviceGeolocationAndCallApi  } from "./location-suggestions-drop-down";
import { getWeatherData, getLocationSuggestions, fetchIpData } from "./forecast-data-fetch-fns";



bindLocationSuggestionsDropDownEvents();
// bindLocationSuggestionSelectEvent();
bindGetDeviceGeolocationEvent();
getDeviceGeolocationAndCallApi();
fetchIpData();


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
