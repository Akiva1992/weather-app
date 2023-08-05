import { getWeatherData } from "./getForecastData";


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



