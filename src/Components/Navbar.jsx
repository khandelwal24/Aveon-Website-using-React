import React, { useEffect, useState } from 'react'
import logo from '../Images/Logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import Team from './Team';
import Gallery from './Gallery';
import pdf from '../Components/pdf/Team Aveon Broucher 2024-25.pdf'


function Navbar() {
    const [Nav, setNav] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (Nav) setNav(false);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [Nav]);


  return (

      <nav className="w-[100%] bg-black text-white overflow-hidden" style={{position:'sticky', zIndex:'999', top:'0',boxShadow:'3px 2px 10px rgb(65, 80, 216)'}}>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${Nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setNav(!Nav)}></div>
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

        <div className= {Nav ? 'fixed left-0 top-0 w-[100%] h-full lol rounded-e-xl text-center ease-in-out duration-300 opacity-95': 'bg-[#080f29] ease-in-out duration-300 text-center fixed -left-40 '} style={{fontFamily:'Orbitron',padding:'5px'}} >
        <img src={logo} width={200} className= {`text-3xl font-bold text-white mb-6 px-4 py-[14px] ${ !Nav ? 'hidden' : 'block'} `}/>
          <a href="#Home" className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">Home</a>
          <a href="#About" className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">About</a>
          <NavLink to={'/Team'} className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">Team</NavLink>
          <a href="#Sponsors" className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">Sponsors</a>
          <NavLink to={'/Gallery'} className=" border-b-[1px] rounded-xl border-white block py-3 px-2 mb-3 hover:bg-[#213068] hover:transition-all ease-in-out duration-75">Gallery</NavLink>
          <a href={pdf} download="Team Aveon Broucher.pdf" className={`p-2.5 bg-gray-600 text-white rounded-full mt-7 border-2 border-white ${(Nav) ? 'block' : 'hidden'} hover:bg-gray-500`}>Download Broucher <i class="fa-solid fa-download"></i> </a>
      </div>
        
      
    </nav>
    
  )
}

export default Navbar
