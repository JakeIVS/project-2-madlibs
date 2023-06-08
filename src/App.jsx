import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Selector from './components/Selector'
import MadLibForm from './components/MadLibForm'
import FinishedPrompt from './components/FinishedPrompt'
import SavedList from './components/SavedList'
import NewTemplateForm from './components/NewTemplateForm'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  //declare all top-level states needed
  const [madLib, setMadLib] = useState([])
  const [formData, setFormData] = useState({})
  const [formArray, setFormArray] = useState([])
  const [list, setList] = useState([])
  //set a navigate variable to switch routes
  const navigate = useNavigate()
  console.log(madLib)

  function handleRestart() { //clears out all states and returns to starting page
    setFormArray([])
    setFormData({})
    setMadLib([])
    setList([])
    navigate("/", {replace: true})
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Nav setList={setList}/>} />
        <Route path="/selector"  element={<Selector setMadLib={setMadLib} setFormData={setFormData} onReturn={handleRestart} />} />
        <Route path='selector/form' element={<MadLibForm 
        madLib={madLib} 
        formData={formData} 
        formArray={formArray} 
        setFormData={setFormData} 
        setFormArray={setFormArray}
        onRestart={handleRestart} />} />
        <Route path='selector/final' element={<FinishedPrompt madLib={madLib} filledBlanks={formArray} onRestart={handleRestart} />} />
        <Route path='/saved' element={<SavedList list={list} onRestart={handleRestart}/>} />
        <Route path='/createnew' element={<NewTemplateForm />} />
      </Routes>
    </>
  )
}

export default App
