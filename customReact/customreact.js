function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttrubute('href', reactElement.props.href);
    domElement.setAttrubute('target', reactElement.props.target);
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