/* eslint-disable import/no-cycle */
import "./style.css";
import { bindGetDeviceGeolocationEvent, bindLocationSuggestionsDropDownEvents, getDeviceGeolocationAndCallApi  } from "./location-suggestions-drop-down";
import { getWeatherData, getLocationSuggestions, fetchIpData } from "./forecast-data-fetch-fns";
import landingPageInit from "./landing-page";





// fetchIpData();
// getWeatherData("jerusalem");


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

function initSearchSuggestions(){
  document.querySelector("#location-search-form").addEventListener("submit", callGetWeatherData)
  document.querySelector("#location-search").addEventListener("input", callGetLocationSuggestions)

  bindLocationSuggestionsDropDownEvents();
  bindLocationSuggestionsDropDownEvents();
}

function initDeviceLocationOption(){
  bindGetDeviceGeolocationEvent();
  getDeviceGeolocationAndCallApi();
}

landingPageInit();
initDeviceLocationOption();
initSearchSuggestions();
