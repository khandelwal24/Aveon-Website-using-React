import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Vehicle from './Components/Vehicle'
import Mobility from './Components/Mobility'
import Stats from './Components/Stats'
import Sponsors from './Components/Sponsors'
import Achievements from './Components/Achievements'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import LastLine from './Components/LastLine'

import Team from './Components/Team'
import Gallery from './Components/Gallery'
import Error from './Components/Error'

import Home from './Components/Home'

import { BrowserRouter,Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Team' element={<Team/>} />
          <Route path='/Gallery' element={<Gallery/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
