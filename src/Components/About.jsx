import React from 'react'
import GI from '../Images/Group Img.jpg'

function About() {
  return (
    <div id="About">
      <section className="w-[100%] border-t-[2px] border-gray-200 lg:py-[70px] py-[50px]" >
        <div className="max-w-[1260px] mx-auto sm:px-9 px-7 overflow-hidden" >
            <div className="flex justify-between items-center lg:flex-row flex-col gap-12">
                <div className=" flex flex-col gap-5" data-aos="fade-right" data-aos-duration="1000">
                    <div className="text-gray-200 md:text-6xl text-4xl" style={{fontFamily:'Orbitron'}} >About <span className='text-[#4150d8]'>Us</span></div>
                    <p className="text-lg text-white mt-4 max-w-[700px]"><h1 className='inline-block'>Team Aveon Racing</h1> consists of 25 members and 15 interns from different disciplines who come together to design and fabricate an <strong>Electric all terrain Vehicle</strong> and participate in the national level event, <strong>e-BAJA SAE INDIA.</strong> Team Aveon comprises students from the departments of Mechanical Engineering, Electrical & Electronics Engineering,Electronics & Communications Engineering, and Computer Science Engineering. Team Aveon was established in with the sole purpose of utilising technical knowledge and inspiring research for manufacture of alternate energy automobiles. We were the first E-BAJA team from East India. Our club aims to foster a passion for high-performance vehicles, build camaraderie among members, and excel in motorsports</p>
                </div>
                  <div data-aos="fade-left" data-aos-duration="1000"><img src={GI} loading="lazy" className="h-80 border-[2px] border-white rounded-xl"/></div>  
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
