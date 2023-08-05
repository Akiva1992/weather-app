export default function createElementAndAddClass(element, className){
    const createdElement = document.createElement(element);
    createdElement.classList.add(className)
    return createdElement
}