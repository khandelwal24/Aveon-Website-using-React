import React from 'react'
import FV from '../Images/Front View.jpg'

function Vehicle() {
  return (
    <div>
      <section className="w-[100%] border-t-[2px] border-gray-200 lg-py-[70px] py-[50px]">
        <div className="max-w-[1260px] mx-auto sm:px-9 px-7 overflow-hidden">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-10">
              <img src={FV} alt='e-ATV vehicle' loading="lazy" className="h-80 border-white border-[2px] rounded-xl" data-aos="zoom-in" data-aos-duration="1000"/> 
                <div className="flex justify-end flex-col gap-5" data-aos="fade-left" data-aos-duration="1000">
                    <h1 className="text-gray-200 md:text-6xl text-4xl leading-[1.5]" style={{fontFamily:'Orbitron'}}> <span className='text-[#4150d8]'>Electric</span>  All-Terrain Vehicle</h1>
                    <p className="text-lg text-white mt-4"><strong>BAJA SAE INDIA</strong> is an international student-level competition that challenges Team Aveon to design and build a rugged, single-seat e-ATV. The goal for each team is to create a prototype that can pass various tests that also includes an endurance race. As part of the SAE INDIA , we accepted this challenge and decided to build an Electric All-Terrain Vehicle by intergrating all the individual skills and knowlege into work.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Vehicle
