import getForecastWeatherData from "./getForecastData";
import {getCurrentConditionText, getCurrentConditionIcon} from "./getCurrentCondition"
import "./style.css";

console.log("Hello from bundle.js");

// const data = getForecastWeatherData("jerusalem");
// console.log(data)

async function getData(location) {
  try {
    const data = await getForecastWeatherData(location);

    console.log(data);
    console.log(getCurrentConditionIcon(data))
  } catch (error) {
    console.log(error);
  }
}

getData("Squamish");
