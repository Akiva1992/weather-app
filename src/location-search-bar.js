import createElementAndAddClass from "./utility-fns"

function filterLocationSuggestionsData(data){
    const locationSuggestionsArray = []
    data.forEach(elem =>{
        locationSuggestionsArray.push([elem.name, elem.region, elem.country])               
    })
    return locationSuggestionsArray
}

export default function renderLocationSuggestions(data){
    
    const searchSuggestionsContainer = document.querySelector(".search-suggestions-list");
    searchSuggestionsContainer.innerText ="";
    
    if (data.length > 0){
        const formattedSuggestionsArray = filterLocationSuggestionsData(data)
        formattedSuggestionsArray.forEach(element =>{
            const li = createElementAndAddClass("li", "suggestion")
            li.innerText = element.join(", ");
            searchSuggestionsContainer.append(li);
        })
    }
}

