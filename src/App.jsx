import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Selector from './components/Selector'
import MadLibForm from './components/MadLibForm'
import FinishedPrompt from './components/FinishedPrompt'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const [madLib, setMadLib] = useState([])
  const [formData, setFormData] = useState({})
  const [formArray, setFormArray] = useState([])
  const [working, setWorking] = useState(false)
  const navigate = useNavigate()

  function handleRestart() {
    setWorking(false)
    setFormArray([])
    setFormData({})
    setMadLib([])
    navigate("/", {replace: true})
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/Selector"  element={<Selector setMadLib={setMadLib} setFormData={setFormData} onReturn={handleRestart} />} />
        <Route path='/form' element={<MadLibForm 
        madLib={madLib} 
        formData={formData} 
        formArray={formArray} 
        setFormData={setFormData} 
        setFormArray={setFormArray}
        onRestart={handleRestart} />} />
        <Route path='/final' element={<FinishedPrompt madLib={madLib} filledBlanks={formArray} onRestart={handleRestart} />} />
      </Routes>
    </>
  )
}

export default App
