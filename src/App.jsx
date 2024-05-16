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


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Vehicle/>
      <Mobility/>
      <Stats/>
      <Sponsors/>
      <Achievements/>
      <Contact/>
      <Footer/>
      <LastLine/>
    </>
  )
}

export default App
