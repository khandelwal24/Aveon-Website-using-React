import React from 'react'
import { Teams_info } from './Teams_Mem_Data'
import Footer from './Footer'
import LastLine from './LastLine'

function Team() {
  return (
    <div>

    <div class="max-w-[1920px] mx-auto text-white">
    <h2 class="text-center sm:text-5xl mt-5 mb-5 text-4xl " style={{fontFamily:'Orbitron'}}>Our Team Members</h2>
    <hr class="w-1/2 font-bold text-black h-1/2 mb-7 mx-auto"/>
    </div>

<div class="max-w-[1920px] mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 px-5 py-4">
   {/* <!-- Creating 1st card Using CSS --> */}
 
 {Teams_info.map((v,i)=>{
    return(
    <div class="w-full flex flex-col px-4 py-3 border-[1px] border-gray-300 text-white gap-4 mx-auto items-center rounded-lg pb-5 bg-gray-900  justify-center">
    <img src={v.img} class="rounded-full h-24 w-24 hover:scale-110 duration-300 active:scale-150 border-[2px] border-blue-500" />
    <h1 class="text-xl font-semibold text-center">{v.Name}</h1>
    <p class="text-lg text-center">{v.Position}</p>
    <div class="w-full flex gap-4 justify-center md:flex-row text-3xl">
      <a href={v.Insta}><i class="fa-brands fa-instagram hover:scale-110 duration-300 hover:text-pink-600 active:scale-150"></i></a>
      <a href={v.Linkedin}><i class="fa-brands fa-linkedin hover:scale-110 duration-300 hover:text-blue-500 active:scale-150"></i></a>
      <a href={v.Mail}><i class="fa-solid fa-envelope hover:scale-110 duration-300 hover:text-yellow-400 active:scale-150"></i></a>
    </div>
</div>
    )
 })}      
</div>
<Footer/>
<LastLine/>
    </div>
  )
}

export default Team
