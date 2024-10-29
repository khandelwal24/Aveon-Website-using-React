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

<div className='max-w-[1260px] mx-auto px-5'>
<p className='text-white text-center sm:text-4xl text-3xl my-2 ' style={{fontFamily:'Orbitron'}}>Recent <span className='text-[#4150d8]'>Recruitment</span> drive</p>
    <hr className='w-3/4 mx-auto my-4'></hr>

    <div className='my-10 items-center flex px-5 overflow-hidden mx-5 relative backdrop-blur-md bg-opacity-25'>
        
        <div className='flex w-full gap-4 max-h-[600px] transition-transform ease-in-out duration-500' style={{transform:`translateX(-${idx*100}%)`}}>
            {slides}
        </div>

        <div className='inset-0 absolute justify-between items-center md:top-[40%] top-[40%]'>
            
            <button onClick={next} className='bg-gray-200 opacity-90 hover:bg-white hover:opacity-100  text-black p-1 rounded-full absolute right-[1%] items-center'>
            <FaChevronRight className='md:size-12 size-9'/>
            </button>
            
            <button onClick={prev} className='bg-gray-200 opacity-90 hover:bg-white hover:opacity-100 text-black p-1 rounded-full absolute left-[1%] items-center'>
            <FaChevronLeft className='md:size-12 size-9'/>
            </button>
     
            
        </div>
        
       
    </div>
</div>
   
    </>
  )
}

export default Carousel
