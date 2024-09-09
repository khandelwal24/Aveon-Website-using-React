import React from 'react'
import SV from '../Images/BITS.jpg'


function College() {
  return (
    <div>
      <section className="w-[100%]  border-t-[2px] border-gray-200 lg-py-[70px] py-[50px]">
        <div className="max-w-[1260px] mx-auto sm:px-9 px-7 overflow-hidden">
            <div className="flex justify-between items-center lg:flex-row flex-col gap-10">
                
               <img src={SV} alt='college Img' className="h-80 border-[2px] border-white rounded-xl" loading="lazy" data-aos="fade-down" data-aos-duration="1000"/>

               <div className="flex justify-end flex-col gap-5" data-aos="fade-up" data-aos-duration="1000">
                    <div className="text-gray-200 md:text-6xl text-4xl" style={{fontFamily:'Orbitron'}}>Our<span className='text-[#4150d8]'> Institution</span></div>
                    <p className="text-lg mt-4 text-white">Established in 1955 by the visionary Industrialist Mr. B.M. Birla, <strong className='text-[#f0ff47]'>Birla Institute of Technology, Mesra</strong> is a premier technical institute and a deemed university under the governance of the C.K. Birla group. 64 years down the line, the zeal to carry forward our mission and vision still burns in our hearts. Every BITian works with a single agenda of making BIT a globally recognized academic institution in consonance with the social, economic, and ecological environment, striving continuously for excellence in education, research, and technological services to the national needs.</p>
                </div>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default College
