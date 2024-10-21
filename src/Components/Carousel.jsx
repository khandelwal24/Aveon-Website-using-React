import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

function Carousel({children:slides}) {

    const [idx,setidx] = useState(0);
    const prev =() =>setidx((idx)=>(idx===0 ? slides.length-1 : idx-1))
    const next =() =>setidx((idx)=>(idx===slides.length-1 ? 0: idx+1))

  return (
    <>


    <p className='text-white text-center sm:text-4xl text-3xl my-2 ' style={{fontFamily:'Orbitron'}}>Recent <span className='text-[#4150d8]'>Recruitment</span> drive</p>
    <hr className='w-3/4 mx-auto my-4'></hr>
    <div className='justify-center items-center flex mx-auto p-5 overflow-hidden relative max-w-[1240px] backdrop-blur-md bg-opacity-25'>
        <div className='flex gap-4 max-h-[600px] transition-transform ease-in-out duration-500' style={{transform:`translateX(-${idx*100}%)`}}>
            {slides}
        </div>

        <div className='inset-0 absolute justify-between items-center p-4 md:top-[40%] top-[35%]'>
            
            
            <button onClick={next} className='bg-gray-200 opacity-90 hover:bg-white hover:opacity-100  text-black p-1 rounded-full absolute right-[1%] items-center'>
            <FaChevronRight className='md:size-12 size-9'/>
            </button>
            
            <button onClick={prev} className='bg-gray-200 opacity-90 hover:bg-white hover:opacity-100 text-black p-1 rounded-full absolute left-[1%] items-center'>
            <FaChevronLeft className='md:size-12 size-9'/>
            </button>
     
            
        </div>
        
       
    </div>
    </>
  )
}

export default Carousel
