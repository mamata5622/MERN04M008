import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </>
  )
}

export default App
