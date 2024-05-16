import React, { useState } from 'react'
import logo from '../Images/Logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import Team from './Team';
import Gallery from './Gallery';


function Navbar() {
    let [Nav, setNav] = useState(false);

  return (

      <nav className="w-[100%] bg-[#080f29] text-white overflow-hidden" style={{position:'sticky', zIndex:'999', top:'0',boxShadow:'3px 2px 10px rgb(65, 80, 216)'}}>
        <div className="max-w-[1260px] mx-auto lg:px-[20px] px-[15px]">
        <div className="flex justify-between items-center py-3">
            <div className="flex items-center xs:space-x-5 space-x-2">
                <img src={logo} className="h-12"/>
            </div>
            <div className="text-2xl space-x-5 lg:block hidden" style={{fontFamily:'Orbitron'}}>
                <a href="#Home" className="hover:text-gray-500 hover:border-b-[2px] border-white hover:transition-all ease-in-out duration-75 ">Home</a>
                <a href="#About" className="hover:text-gray-500 hover:border-b-[2px] border-white hover:transition-all ease-in-out duration-75 ">About</a>
                <NavLink to={"/Team"} className="hover:text-gray-500 hover:border-b-[2px] border-white hover:transition-all ease-in-out duration-75">Team</NavLink>
                <a href="#Sponsors" className="hover:text-gray-500 hover:border-b-[2px] border-white hover:transition-all ease-in-out duration-75">Sponsors</a>
                <NavLink to={"/Gallery"}  className="hover:text-gray-500 hover:border-b-[2px] border-white hover:transition-all ease-in-out duration-75">Gallery</NavLink>
            </div>

<button onClick={()=>setNav(!Nav)} className='mmd:hidden'>
      {!Nav ? <GiHamburgerMenu  className='text-3xl'/> : <IoClose className='text-3xl text-white' />}
</button>

        </div>
        </div>

        <div className= {Nav ? 'fixed left-0 top-0 w-[55%] h-full bg-[#080f29] rounded-e-xl text-center ease-in-out duration-300': 'bg-[#080f29] ease-in-out duration-300 text-center fixed -left-40 '} style={{fontFamily:'Orbitron',padding:'5px'}} >
        <img src={logo} className= {`text-3xl font-bold text-white mb-6 px-4 py-[14px] ${ !Nav ? 'hidden' : 'block'} `}/>
          <a href="#Home" className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">Home</a>
          <a href="#About" className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">About</a>
          <NavLink to={'/Team'} className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">Team</NavLink>
          <a href="#Sponsors" className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">Sponsors</a>
          <NavLink to={'/Gallery'} className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">Gallery</NavLink>
      </div>
        
      
    </nav>
    
  )
}

export default Navbar
