import React from 'react'
import { Gallery_info, ChargeX_info, Pantheon_info } from './Gallery_Data'

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
        <img src={v.img} alt='Team Image' className="w-96 h-full hover:scale-125 duration-300 overflow-hidden border-[2px] border-gray-300 rounded-lg"/>
    )
   })

  const ChargeX = ChargeX_info.map((v,i)=>{
    return(
        <img src={v.img} alt='Team Image' className="w-96 h-full hover:scale-125 duration-300 overflow-hidden border-[2px] border-gray-300 rounded-lg"/>
    )
   })

  const Pantheon = Pantheon_info.map((v,i)=>{
    return(
        <img src={v.img} alt='Team Image' className="w-96 h-full hover:scale-125 duration-300 overflow-hidden border-[2px] border-gray-300 rounded-lg"/>
    )
   })


  const genres = [
    { id: 1, genre: "Events" },
    { id: 2, genre: "ChargeX" },
    { id: 3, genre: "Pantheon" },
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

<div className="my-3 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 overflow-hidden grid-flow-row justify-items-center" >
   {/* <!-- Creating 1st card Using CSS --> */}
{Path.pathname==='/Gallery' && <> {Events}</>}
{Path.pathname=== '/Gallery/Events' && <> {Events} </>}
{Path.pathname==='/Gallery/ChargeX' && <>{ChargeX}</>}
{Path.pathname==='/Gallery/Pantheon' && <>{Pantheon}</>}

</div>

<Footer/>
<LastLine/>
    </div>
  )
}

export default Gallery
