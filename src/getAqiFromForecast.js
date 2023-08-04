/* eslint-disable camelcase */
const _ = require("lodash");

function getCurrentAqi(data){
    return data.current.air_quality
};


function extractTimeAndAqi({ time, air_quality }) {
  return {
    time,
    aqi: air_quality,
  };
}
  

function getAqiValuesAllHoursOfDay(data, day) {
  const hourlyData = data.forecast.forecastday[day].hour;
  return hourlyData.map(extractTimeAndAqi);
}



function getAverageAqiForTheDay(data, day){
  return _.at(data, [`forecast.forecastday[${day}].date`, `forecast.forecastday[${day}].day.air_quality`]);
}
  

export { getCurrentAqi, getAqiValuesAllHoursOfDay, getAverageAqiForTheDay,  }