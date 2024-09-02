import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Vehicle from './Vehicle'
import Mobility from './Mobility'
import Stats from './Stats'
import Sponsors from './Sponsors'
import Achievements from './Achievements'
import Contact from './Contact'
import Footer from './Footer'
import LastLine from './LastLine'
import College from './College'


function Home() {
  return (
    <div className='italic'>
      <Navbar/>
      <Hero/>
      <College/>
      <About/>
      <Vehicle/>
      <Mobility/>
      <Stats/>
      <Sponsors/>
      <Achievements/>
      <Contact/>
      <Footer/>
      <LastLine/>
    </div>
  )
}

export default Home
