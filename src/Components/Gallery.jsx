import React from 'react'
import { Gallery_info } from './Gallery_Data'
import Footer from './Footer'
import LastLine from './LastLine'

function Gallery() {
  return (
    <div>
        <div className="max-w-[1260px] mx-auto sm:px-[24px] px-[18px] py-6">
                <h1 className="xs:text-5xl text-3xl text-center text-white" style={{fontFamily:'Orbitron'}}>
                    Team Gallary
                </h1>
                <hr className="mx-auto w-1/2 text-white my-6"/>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 overflow-hidden grid-flow-row">

               {Gallery_info.map((v,i)=>{
                return(
                    <img src={v.img} className="w-96 h-full hover:scale-150 duration-300 overflow-hidden border-[2px] border-gray-300 rounded-lg"/>
                )
               })}

                </div>
            </div>
<Footer/>
<LastLine/>
    </div>
  )
}

export default Gallery
