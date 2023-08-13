import { getCurrentFeelsLikeTempInC, getCurrentFeelsLikeTempInF, getCurrentHumidity } from "./home-page-getters";
import { setElementInnerText } from "./utility-fns"

function formatResponseToLocalTimeAndDate(locationData){
    const options = {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric", 
        hour12: true,
        timeZone: `${locationData.tz_id}`,
        timeZoneName: "short" 
    }
    const date = new Date(locationData.localtime_epoch * 1000);
    const localTimeAndDate = new Intl.DateTimeFormat("en-GB", options).format(date);
    return localTimeAndDate
};


export default function currentWeatherPageController(data){
    const currentData = data.current;
    const locationData = data.location;

    
    // console.log(data)
    console.log(getCurrentFeelsLikeTempInF(data), getCurrentFeelsLikeTempInC(data), getCurrentHumidity(data))
    

    // setElementInnerText("name-txt", locationData.name);
    // setElementInnerText("country-txt", locationData.country);
    // setElementInnerText("region-txt", locationData.region);
    // setElementInnerText("local-time-txt", formatResponseToLocalTimeAndDate(locationData));
    // setElementInnerText("local-date-txt", formatDate(locationDate));

}




