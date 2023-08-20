export function getCityName(data){
    return data.location.name
};
export function getCountryName(data){
    return data.current.cloud
};

export function getCurrentCloud(data){
    return data.current.cloud
};

export function getCurrentConditionCode(data){
    return data.current.condition.code
};

export function getCurrentConditionText(data){
    return data.current.condition.text
};

export function getCurrentFeelsLikeTempInC(data){
    return data.current.feelslike_c
};

export function getCurrentFeelsLikeTempInF(data){
    return data.current.feelslike_f
};

export function getCurrentHumidity(data){
    return data.current.humidity
};

export function getCurrentIsDay(data){
    return data.current.is_day
};

export function getCurrentLastUpdatedEpoch(data){
    return data.current.last_updated_epoch
};

export function getCurrentPrecipIn(data){
    return data.current.precip_in
};

export function getCurrentPrecipMm(data){
    return data.current.precip_mm    
};

export function getCurrentPressureIn(data){
    return data.current.pressure_In    
};

export function getCurrentPressureMb(data){
    return data.current.pressure_mb    
};

export function getCurrentTempInC(data){
    return data.current.temp_c
};
    
export function getCurrentTempInF(data){
    return data.current.temp_f
};

export function getCurrentUv(data){
    return data.current.uv    
};

export function getCurrentVisInKm(data){
    return data.current.vis_km   
};

export function getCurrentVisInMiles(data){
    return data.current.vis_miles   
};

export function getCurrentWindDirection(data){
    return data.current.wind_dir
};

export function getCurrentWindSpeedInKph(data){
    return data.current.wind_kph
};

export function getCurrentWindSpeedInMph(data){
    return data.current.wind_mph
};

export function getForecastSunrise(data, day){
    return data.forecast.forecastday[day].astro.sunrise
};

export function getForecastSunset(data, day){
    return data.forecast.forecastday[day].astro.sunset
};

export function getChanceOfRain(data, day){
    return data.forecast.forecastday[day].day.daily_chance_of_rain
};