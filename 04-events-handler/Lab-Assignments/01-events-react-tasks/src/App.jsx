import { useState } from 'react'
import './App.css'

function App() {

  const [click, setClick] = useState('Not Clicked')

  const handleClick = () => {
    setClick("Clicked");
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <h2>{click}</h2>
    </>
  )
}

export default App
