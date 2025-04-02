import React from 'react'
import { Gallery_info, ChargeX_info, Pantheon_info, E_baja_2025, Bitosav2025 } from './Gallery_Data'

import {Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import LastLine from './LastLine'
import Navbar2 from './Navbar2'

function Gallery() {
  
  let Path = useLocation();
  let navigate = useNavigate();
  let params = useParams();


  const Events = Gallery_info.map((v,i)=>{
    return(
        <img src={v.img} key={i} alt='Team Image' className="w-96 h-full hover:scale-110 duration-300 overflow-hidden border-[2px] border-gray-300 rounded-lg"/>
    )
   })

  const ChargeX = ChargeX_info.map((v,i)=>{
    return(
        <img src={v.img} key={i} alt='Team Image' className="w-96 h-full hover:scale-110 duration-300 overflow-hidden border-[2px] border-gray-300 rounded-lg"/>
    )
   })

  const Pantheon = Pantheon_info.map((v,i)=>{
    return(
        <img src={v.img} key={i} alt='Team Image' className="w-96 h-full hover:scale-110 duration-300 overflow-hidden border-[2px] border-gray-300 rounded-lg"/>
    )
   })

  const Ebaja2025 = E_baja_2025.map((v,i)=>{
    return(
        <img src={v.img} key={i} alt='Team Image' className="w-96 h-full hover:scale-110 duration-300 overflow-hidden border-[2px] border-gray-300 rounded-lg"/>
    )
   })

  const Bitosav_2025 = Bitosav2025.map((v,i)=>{
    return(
        <img src={v.img} key={i} alt='Team Image' className="w-96 aspect-auto h-full hover:scale-110 duration-300 overflow-hidden border-[2px] border-gray-300 rounded-lg"/>
    )
   })




  const genres = [
    { id: 1, genre: "Events"},
    { id: 2, genre: "ChargeX-2024"},
    { id: 3, genre: "Pantheon-2024"},
    { id: 4, genre: "Ebaja-2025"},
    { id: 5, genre: "Bitosav-2025"},
   ];
  
   let handleGenreSelect = (e) => {
    const eventss = e.target.value;
    {(eventss === '') ? navigate('/Gallery') : navigate(`/Gallery/${eventss}`)}
   };


  return (
    <div className='italic'>
    <Navbar2/>
    <div className="max-w-[1920px] mx-auto text-white">
    <h2 className="text-center sm:text-5xl mt-5 mb-5 text-4xl" style={{fontFamily:'Orbitron'}}>Team Gallery

    <select onChange={handleGenreSelect} className='bg-black text-center text-2xl px-1 bg-transparent ml-2 rounded-lg text-red-500'> 
   
    {genres.map(el => <option key={el.id}> {el.genre} </option>)}

    </select>
    </h2>

    <hr className="w-1/2 font-bold text-black h-1/2 mb-7 mx-auto"/>
    </div>

<div className="my-3 grid lg:grid-cols-3 px-5 py-3 md:grid-cols-2 grid-cols-1 gap-6 overflow-hidden grid-flow-row justify-items-center" >
   {/* <!-- Creating 1st card Using CSS --> */}
{Path.pathname==='/Gallery' && <> {Events} </>}
{Path.pathname==='/Gallery/Events' && <> {Events} </>}
{Path.pathname==='/Gallery/ChargeX-2024' && <>{ChargeX}</>}
{Path.pathname==='/Gallery/Pantheon-2024' && <>{Pantheon}</>}
{Path.pathname==='/Gallery/Ebaja-2025' && <>{Ebaja2025}</>}
{Path.pathname==='/Gallery/Bitosav-2025' && <>{Bitosav_2025}</>}

</div>

<Footer/>
<LastLine/>
    </div>
  )
}

export default Gallery
