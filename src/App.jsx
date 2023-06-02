import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Selector from './components/Selector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Selector />
    </>
  )
}

export default App
