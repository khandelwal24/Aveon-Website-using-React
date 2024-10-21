import React from 'react'
import { Img_info } from './ImgData'


function Sponsors() {
  return (
    <div>
      <section className="w-[100%]  text-white border-t-[2px] border-gray-200 lg:py-[70px] py-[50px]">
        <div className="max-w-[1260px] mx-auto sm:px-9 px-7 overflow-hidden">

            <p className="md:text-5xl text-[32px] text-center mx-auto text-gray-200" style={{fontFamily:'Orbitron'}} id="Sponsors">
                <strong>
                    Our Previous <span className='text-[#4150d8]'> Sponsors</span>
                </strong>
            </p>
            <hr className="text-white mx-auto w-1/2 my-8"/>
            <marquee direction="left px-8" scrollamount="10">
                <div className="flex space-x-4 my-6">                   
                    {Img_info.map((v,i)=>{
                        return(
                            <img src={v.img} alt='sponsor Image' key={i} className='md:h-32 h-20 w-full bg-[#080f29]'/>
                        )
                    })}
                    
                </div>
              </marquee>

        </div>
      </section>
    </div>
  )
}

export default Sponsors
