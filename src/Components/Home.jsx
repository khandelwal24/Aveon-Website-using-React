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
import Carousel from './Carousel'


const slides = [
  "./Gallery/R1.jpg",
  "./Gallery/R2.jpg",
  "./Gallery/R5.jpg",
  "./Gallery/R6.jpg",
  "./Gallery/R3.jpg",
  "./Gallery/R4.jpg",
]


function Home() {
  return (
    <div className='italic'>
      <Navbar/>
      <Hero/>
      <main>
      <College/>
      <About/>
      <Vehicle/>
      <Mobility/>
      <Stats/>
      <Sponsors/>
      <Achievements/>
      <Carousel>
      {slides.map((s,i)=>(
        <img src = {s} key={i} style={{border:'2px solid white', borderRadius:'5px'}}/>
      ))}
      </Carousel>
      <Contact/>
      </main>
    <footer><Footer/></footer> 
      <LastLine/>
    </div>
  )
}

export default Home
