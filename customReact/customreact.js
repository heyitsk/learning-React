function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)
    for (const prop in props) {
        if (prop === 'children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])   
    
    }
    container.app

}
const reactElement = {
    type: 'a',
    props :{
        href : 'http://google.com',
        target : '_blank',

    },
    children : "click me to visit google"
}

const mainContainer = document.getElementById("#root");
customRender(reactElement, mainContainer) //1st argument is the react element and 2nd argument is the container where we want to render the element