import renderLocationSuggestions from "./render-location-suggestions";
import currentWeatherPageController from "./home-page";


async function fetchWeatherForecast(location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e0f276e0654440c6b4a212911232107&q=${location}&days=3&aqi=yes&alerts=yes`, { mode: "cors" });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


export async function fetchIpData() {
    try {
      const response = await fetch("http://ip-api.com/json/?fields=1106141", { mode: "cors" });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();

      console.log(data)
      
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


async function fetchLocationSuggestions(location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=e0f276e0654440c6b4a212911232107&q=${location}`, { mode: "cors" });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  export  async function getWeatherData(location) {
    try {
      const data = await fetchWeatherForecast(location);
      console.log(data)
      // initHomePage(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function getLocationSuggestions(location) {
    try {
      const data = await fetchLocationSuggestions(location);
      // console.log(data)
      renderLocationSuggestions(data)
    } catch (error) {
      console.log(error);
    }
  }
  