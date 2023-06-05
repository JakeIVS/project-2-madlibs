import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Selector from './components/Selector'
import MadLibForm from './components/MadLibForm'
import FinishedPrompt from './components/FinishedPrompt'

function App() {
  const [madLib, setMadLib] = useState([])
  const [formData, setFormData] = useState({})
  const [formArray, setFormArray] = useState([])

  return (
    <>
      <Header />
      <Selector setMadLib={setMadLib} setFormData={setFormData} />
      <MadLibForm 
      madLib={madLib} 
      formData={formData} 
      formArray={formArray}
      setFormData={setFormData}
      setFormArray={setFormArray} />
      <FinishedPrompt madLib={madLib} filledBlanks={formArray} />
    </>
  )
}

export default App
