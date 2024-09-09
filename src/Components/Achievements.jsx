import React from 'react'
import { Achive } from './Achievement_Data'

function Achievements() {
  return (
    <div>
      <section className="w-[100%] border-t-[2px] border-gray-200 lg:py-[70px] py-[50px]">
        <div className="mx-auto max-w-[1260px] sm:px-9 px-7 space-y-7 overflow-hidden">
          
          <div className="space-y-5" data-aos="flip-up" data-aos-duration="5000">
            <p className="text-white md:text-5xl text-[32px] font-bold mx-auto text-center" style={{fontFamily:'Orbitron'}}>Achieve<span className="text-[#4150d8] mx-auto">ments</span></p>
            <hr className="text-white w-1/2 mx-auto"/>
          </div>

          <div className="space-y-10">               
                    {Achive.map((v,i)=>{
                       return(
                        <div key={i} className="backdrop-blur-xl bg-opacity-30 grid sm:grid-cols-2 grid-cols-1 gap-3 max-w-[850px] bg-[#080f29] text-white mx-auto px-7 py-5 rounded-2xl items-center justify-center text-center justify-items-center border-[1px] border-b-orange-200" style={{boxShadow:'5px 5px 10px rgb(65, 80, 216),-5px -5px 10px rgb(90,89,208)'}} data-aos="flip-up" data-aos-duration="5000">
                        
                        <img src={v.img} alt='E-baja Image' width={250} className='rounded-full border-[2px] border-[#4150d8]' style={{boxShadow:'5px 3px 5px rgb(65, 80, 216)'}}/>
                        
                        <p className='text-lg'>
                        <span className='text-3xl font-bold block text-[#4150d8]' style={{fontFamily:'Orbitron'}}>{v.year}</span>
                        {v.des}
                        </p>

                        </div>
                       )
                    })}


          </div>

        </div>

      </section>
    </div>
  )
}

export default Achievements
