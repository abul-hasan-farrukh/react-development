import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherUser = " Haan"
const reactElement = React.createElement( 
    'a',  //predefined syntax of declaring parameters in createElement() of react. createElement() method is injected by Babel which is a transpiler.
    { href: 'https://www.google.com', target: '_blank' },
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
