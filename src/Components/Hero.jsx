import React from 'react'
import C from '../Images/Car.png'
import Herobg from '../Images/Hero.jpg'
import pdf from '../Components/pdf/Broucher A.pdf'

function Hero() {
  return (
    <div>
       <section className="w-[100%] h-[100vh] bg-no-repeat bg-center bg-cover lg:py-[80px] py-[50px] overflow-hidden" id="Home">
            <div className="max-w-[1260px] mx-auto lg:px-[20px] px-[15px]">
                <div className="flex flex-col-reverse items-center justify-between mmd:flex-row overflow-hidden mmd:gap-7 px-7 gap-[4.75rem]" data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className="lg:text-7xl text-5xl text-gray-200 max-w-[500px]" style={{fontFamily:'Orbitron'}}>Race Recharge Retread</h1>
                    <img src={C} loading="lazy" className="hover:scale-110 transition-all ease-in-out duration-300"/>
                </div>
            </div>
          <button className='hidden md:block relative my-4 mmd:-right-[85%] p-2.5 bg-gray-600 text-white rounded-md border-2 border-black hover:bg-gray-500' >  <a href={pdf} download="Team Aveon Broucher.pdf" >Download Broucher <i class="fa-solid fa-download"></i></a> </button> 
    </section>
    </div>
  )
}

export default Hero
