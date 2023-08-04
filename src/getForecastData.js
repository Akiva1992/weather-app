export default async function getForecastWeatherData(location) {
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
  