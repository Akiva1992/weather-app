import { getWeatherData } from "./forecast-data-fetch-fns";


function callApiWithDeviceLocation(lat, long){
    console.log(lat, long)
    getWeatherData(`${lat},${long}`)
}

export function getDeviceGeolocationAndCallApi(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            // console.log("Latitude:", latitude);
            // console.log("Longitude:", longitude);
            // console.log(position)
            callApiWithDeviceLocation(latitude, longitude)
        },
        error => {
            console.error("Error getting location:", error);
        }
        );
    } else {
        console.error("Geolocation is not available in this browser.");
    }
}

export function bindGetDeviceGeolocationEvent(){
    document.querySelector(".use-current-location").addEventListener("click", getDeviceGeolocationAndCallApi)
}





function selectAndCallApiWithSuggestion(e){
    console.log(e.target.innerText)
    getWeatherData(e.target.innerText)
}

export function bindLocationSuggestionSelectEvent(){
    Array.from(document.querySelectorAll(".suggestion")).forEach(suggestion =>{
        suggestion.addEventListener("click", selectAndCallApiWithSuggestion)
    });
}


function handleFocus() {
    setTimeout(()=>{
        document.querySelector(".search-suggestions-container").classList.add("active");
    },"100");
}
  
function handleBlur() {
    setTimeout(()=>{
        document.querySelector(".search-suggestions-container").classList.remove("active");
        document.querySelector(".search-suggestions-list").innerText = "";
    },"200");

}

export function bindLocationSuggestionsDropDownEvents(){
    const locationSearchBar = document.querySelector("#location-search");

    locationSearchBar.addEventListener("focus", handleFocus);
    locationSearchBar.addEventListener("blur", handleBlur);
}



