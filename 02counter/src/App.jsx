import { useState } from 'react' //useState hook is responsible for propagating the state or change in UI. useState returns an array that contains two values, 1st is counter and 2nd is a function.  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  
  // let [counter, setCounter] = useState(15)
  
  // // let counter = 15
  
  // const addvalue = () => {
  //   // counter = counter + 1
  //   setCounter(counter + 1)
  //   // console.log("clicked", counter);
  // }

  // const removevalue = () => {
  //   setCounter(counter - 1)
  // }

  let [counter, setCounter] = useState(0)

  const addvalue = () => {
    if(counter == 20)
    {
      setCounter(counter = 20)
    }
    else
    {
      setCounter(counter + 1)
    }
  }

  const removevalue = () => {
    if(counter == 0)
    {
      setCounter(counter = 0)
    }
    else
    {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>I am Learning React.js</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Add Value {counter}</button>
      <br/>
      <button onClick={removevalue}>Subtract Value</button>
    </>
  )
}

export default App
