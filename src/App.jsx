import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Selector from './components/Selector'

function App() {
  const [madLib, setMadLib] = useState([])
  console.log(madLib)
  return (
    <>
      <Header />
      <Selector setMadLib={setMadLib} />
    </>
  )
}

export default App
