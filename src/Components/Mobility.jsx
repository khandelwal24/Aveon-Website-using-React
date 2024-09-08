import React from 'react'
import SV from '../Images/sideview.jpg'


function Mobility() {
  return (
    <div>
      <section className="w-[100%]  border-t-[2px] border-gray-200 lg-py-[70px] py-[50px]">
        <div className="max-w-[1260px] mx-auto sm:px-9 px-7 overflow-hidden">
            <div className="flex justify-between items-center lg:flex-row flex-col gap-10">
                <div className="flex justify-end flex-col gap-5" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="text-gray-200 md:text-6xl text-4xl" style={{fontFamily:'Orbitron'}}>Promote E - <span className='text-[#4150d8]'> Mobility</span></h1>
                    <p className="text-lg text-white mt-4">As the world continues to shift towards a greener, more eco-friendly electrical approach, Team Aevon is taking steps to contribute towards this change by participating in various competitions that will allow us to gain the knowledge in the development of an electric All-Terrain Vehicle (ATV).Tesr is committed to promoting a greener future and we're excited to be part of this important movement!</p>
                </div>
               <img src={SV} className="h-80 border-[2px] border-white rounded-xl" loading="lazy" data-aos="fade-left" data-aos-duration="1000"/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Mobility
