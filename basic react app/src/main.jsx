import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// as App is also a function which is returning we can create a function here as well which returns something and we can call it. 
function MyApp(){
  return(
    <>
    <p>custom app</p>
    </>
  )
}

//since at the end of day the above function MyApp() gets parsed (converted) into the below type of reactElement which is an object with key value pairs by "babble" 
const reactElement = {
  type: 'a',
  props :{
      href : 'http://google.com',
      target : '_blank',

  },
  children : "click me to visit google"
} // but this when entered inside render function won't execute bcz we created this for our own customReact and this is not how react accept arguments if you want to create one ->

const anotherReactElement = React.createElement(
  'p',
  {href:"https://google.com", target:"_blank"},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyApp/> */}
    {/* since it is a function we can call it as MyApp() but this is not how we should do it */}
    anotherReactElement
    {/* name should start from caps letter */}
  </StrictMode>
)
