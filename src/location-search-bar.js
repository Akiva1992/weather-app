
function manageAutoCompleteData(data){
    const autoCompleteDataArray = []
    data.forEach(elem =>{
        // autoCompleteDataArray  = []
        autoCompleteDataArray.push([elem.id, elem.name, elem.region, elem.country])      
        console.log("data array:")      
        console.log(autoCompleteDataArray)            
    })
    return autoCompleteDataArray
}

export default function autoCompleteRender(data){
    const searchSuggestionsContainer = document.querySelector(".search-suggestions-container");
    searchSuggestionsContainer.innerText ="";
    if (data.length > 0){
        const dataArray = manageAutoCompleteData(data)
        dataArray.forEach(Element =>{
            const div = document.createElement("div");
            div.innerText = Element
            searchSuggestionsContainer.append(div);
        })
    }
}