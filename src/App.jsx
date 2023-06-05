import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Selector from './components/Selector'
import MadLibForm from './components/MadLibForm'
import FinishedPrompt from './components/FinishedPrompt'

function App() {
  const [madLib, setMadLib] = useState([])
  console.log(madLib)
  return (
    <>
      <Header />
      <Selector setMadLib={setMadLib} />
      <MadLibForm madLib={madLib} />
      <FinishedPrompt madLib={madLib}/>
    </>
  )
}

export default App
