import Chai from "./chai"

function App() {
  const username = "Hasan"
  // returning a fragment below using <> ... </>.
  // the username inside {} is called an evaluated expression.
  return (
    <>
      <Chai />
      <h1>Hello {username} I am Groot</h1> 
      <h3>Kashif</h3>
    </>
  )
}

export default App
