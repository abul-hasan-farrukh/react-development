import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  //when we use ContextAPI we pass value here but in RTK we pass store here.
  <Provider store={store}> 
    <App />
  </Provider>,
)
