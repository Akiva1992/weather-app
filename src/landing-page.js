import { getWeatherData } from "./forecast-data-fetch-fns";
import { getChanceOfRain, getCityName, getCurrentConditionText, getCurrentTempInC, getCurrentVisInKm, getForecastSunrise, getForecastSunset } from "./home-page-getters";


function setCityName(className, name){
    document.querySelector(`.city-name${className}`).innerText = name;
}

function setCurrentTemp(className, temp){
    document.querySelector(`.current-temp${className}`).innerText = temp;
}

function setCurrentConditionsTxt(className, currentConditionsTxt){
    document.querySelector(`.current-conditions-txt${className}`).innerText = currentConditionsTxt;
}

function setCurrentConditionsLogo(className, currentConditionsLogo){
    document.querySelector(`.current-conditions-logo.${className}`).innerText = currentConditionsLogo;
}

function setVisTxt(className, visTxt ){
    document.querySelector(`.vis-txt${className}`).innerText = visTxt;
}

function setVisLogo(className, visLogo ){
    document.querySelector(`.vis-logo${className}`).innerHTML = visLogo;
}

function setSunrise(className, sunrise ){
    document.querySelector(`.sunrise${className}`).innerHTML = sunrise;
}

function setSunset(className, sunset ){
    document.querySelector(`.sunset${className}`).innerHTML = sunset;
}

function setChanceOfRain(className, chanceOfRain ){
    document.querySelector(`.daily-chance-of-rain${className}`).innerHTML = chanceOfRain;
}

function setLandingPageCardDetails(className, data){
    setCityName(className, getCityName(data))
    setCurrentTemp(className, getCurrentTempInC(data))
    setCurrentConditionsTxt(className, getCurrentConditionText(data))
    setVisTxt(className, `${getCurrentVisInKm(data)} K`);
    setSunrise(className, getForecastSunrise(data,0))
    setSunset(className, getForecastSunset(data,0))
    setChanceOfRain(className, `${getChanceOfRain(data,0)} chance of rain`)
}


async function callApiWitchCItyAndCountry(cityAndCountry){
    const data = await getWeatherData(cityAndCountry);
    return data
}

export default async function landingPageInit(){

    const dubaiData = await callApiWitchCItyAndCountry("Dubai, Emirate of Dubai");
    setLandingPageCardDetails(".dubai", dubaiData);

    const londonData = await callApiWitchCItyAndCountry("London, UK");
    setLandingPageCardDetails(".london", londonData);
    
    const sydneyData = await callApiWitchCItyAndCountry("Sydney, Australia");
    setLandingPageCardDetails(".sydney", sydneyData);

    const newYorkData = await callApiWitchCItyAndCountry("New-York, USA");
    setLandingPageCardDetails(".new-york", newYorkData);
    

}