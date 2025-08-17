import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState()

  return (
    <>
      <form>
        <label htmlFor="name">Type your name:</label>
        <input type="text" name="" id="nameInp" onChange={(e)=>{setName(e.target.value)}} /><br />
        <button type="submit">Submit</button>
      </form>
      <h2>{name}</h2>
    </>
  )
}

export default App
