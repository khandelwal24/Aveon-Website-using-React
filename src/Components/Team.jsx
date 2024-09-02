import React, { useEffect, useState } from 'react'
import { Teams_info,Teams_infoK22 } from './Teams_Mem_Data'
import Footer from './Footer'
import LastLine from './LastLine'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'


function Team() {

  let Path = useLocation();
  let navigate = useNavigate();
  let params = useParams();

  

const K21 = Teams_info.map((v,i)=>{
    return(
    <div style={{boxShadow:'3px 3px 5px rgb(65, 80, 216),-3px -3px 5px rgb(90,89,208)'}}  data-aos="flip-left" data-aos-duration="5000" key={i} className="backdrop-blur-lg bg-opacity-30 w-full flex flex-col px-4 py-3 border-[1px] border-orange-200 text-white gap-4 mx-auto items-center rounded-lg pb-5 bg-gray-900  justify-center">
    <img src={v.img} loading='lazy' className="rounded-full h-24 w-24 hover:scale-110 duration-300 active:scale-150 border-[2px] border-blue-500" />
    <h1 className="text-xl font-semibold text-center">{v.Name}</h1>
    <p className="text-xl font-extrabold text-center text-purple-500" style={{fontFamily:"sans-serif"}}>{v.Position}</p>
    <div className="w-full flex gap-4 justify-center md:flex-row text-3xl">
      <a href={v.Insta}><i className="fa-brands fa-instagram hover:scale-110 duration-300 hover:text-pink-600 active:scale-150"></i></a>
      <a href={v.Linkedin}><i className="fa-brands fa-linkedin hover:scale-110 duration-300 hover:text-blue-500 active:scale-150"></i></a>
      <a href={v.Mail}><i className="fa-solid fa-envelope hover:scale-110 duration-300 hover:text-yellow-400 active:scale-150"></i></a>
    </div>
</div>
    )
 })
 
const K22 = Teams_infoK22.map((v,i)=>{
  return(
    <div  data-aos="flip-left" data-aos-duration="5000" key={i} className="backdrop-blur-lg bg-opacity-30 w-full flex flex-col px-4 py-3 border-[1px] border-orange-200 text-white gap-4 mx-auto items-center rounded-lg pb-5 bg-gray-900 justify-center" style={{boxShadow:'3px 3px 5px rgb(65, 80, 216),-3px -3px 5px rgb(90,89,208)'}}>
    <img  src={v.img} loading='lazy' className="rounded-full h-24 w-24 hover:scale-110 duration-300 active:scale-150 border-[2px] border-blue-500" />
    <h1 className="text-xl font-semibold text-center">{v.Name}</h1>
    <p className="text-xl font-extrabold text-center text-purple-500" style={{fontFamily:"sans-serif"}}>{v.Position}</p>
    <div className="w-full flex gap-4 justify-center md:flex-row text-3xl">
      <a href={v.Insta}><i className="fa-brands fa-instagram hover:scale-110 duration-300 hover:text-pink-600 active:scale-150"></i></a>
      <a href={v.Linkedin}><i className="fa-brands fa-linkedin hover:scale-110 duration-300 hover:text-blue-500 active:scale-150"></i></a>
      <a href={v.Mail}><i className="fa-solid fa-envelope hover:scale-110 duration-300 hover:text-yellow-400 active:scale-150"></i></a>
    </div>
</div>
    )
})


const genres = [
  { id: 1, genre: "K21" },
  { id: 2, genre: "K22" },
  { id: 3, genre: "K23" },
 ];

 let handleGenreSelect = (e) => {
  const year = e.target.value;
  {(year==='') ? navigate('/Team') : navigate(`/Team/${year}`)}
 };


  return (
    <div className='italic'>
    <div className="max-w-[1920px] mx-auto text-white">
    <h2 className="text-center sm:text-5xl mt-5 mb-5 text-4xl" style={{fontFamily:'Orbitron'}}>Our Team Members

    <select onChange={handleGenreSelect} className='bg-black text-center px-1 bg-transparent ml-2 rounded-lg text-red-500'> 
    {genres.map(el => <option key={el.id}>{el.genre}</option>)}
     
    </select>
    </h2>

    <hr className="w-1/2 font-bold text-black h-1/2 mb-7 mx-auto"/>
    </div>

<div className="max-w-[1920px] mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-7 sm:px-5 px-10 py-4" >
   {/* <!-- Creating 1st card Using CSS --> */}

{Path.pathname==='/Team' && <>{K21}</>}
{Path.pathname==='/Team/K21' && <>{K21}</>}
{Path.pathname==='/Team/K22' && <>{K22}</>}

</div>
<Footer/>
<LastLine/>
    </div>
  )
}

export default Team
