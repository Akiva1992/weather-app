function createElementAndAddClass(element, className){
    const createdElement = document.createElement(element);
    createdElement.classList.add(className)
    return createdElement
}

function setElementInnerText(element, text){
    document.querySelector(`.${element}`).innerText = text;
}

export { createElementAndAddClass, setElementInnerText }