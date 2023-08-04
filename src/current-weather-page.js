import { format } from "date-fns"

function setElementInnerText(element, input){
    document.querySelector(`.${element}`).innerText = input;
}

function formatDate(locationData){
    const convertedDate = new Date (locationData.localtime_epoch * 1000)
    return format(convertedDate, "MMM do yyyy")
}

function formatTime(locationData){
    const convertedDate = new Date (locationData.localtime_epoch * 1000)
    return format(convertedDate, "hh:mm aaa")
}


export default function currentWeatherPageController(data){
    const currentData = data.current;
    const locationData = data.location;
    
    setElementInnerText("name-txt", locationData.name);
    setElementInnerText("country-txt", locationData.country);
    setElementInnerText("region-txt", locationData.region);
    setElementInnerText("local-time-txt", formatTime(locationData));
    setElementInnerText("local-date-txt", formatDate(locationData));

}



