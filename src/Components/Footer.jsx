import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import LL from '../Images/Logo.png'
import { Link } from 'react-router-dom';

function Footer() {

    let click = ()=>{
        alert('Comming Soon');
    }

  return (
    <div>
       <footer className="bg-black w-[100%] body-font border-t-[2px] border-gray-200 py-16">
        <div className="max-w-[1260px]  mx-auto sm:px-9 px-7 overflow-hidden">
          <div className="flex justify-between items-center gap-5 overflow-hidden md:flex-row flex-col">
            
            <article className='mmd:mr-8'>
              <img src={LL} className="h-12 mx-auto md:mx-0"/>
            <div className="md:text-left text-center">
              <p className="mt-2 text-md text-white ">An e-ATV Racing Team of Birla Institute of Technology - Mesra, Ranchi</p>
              <div data-aos="flip-up" data-aos-duration="5000" className="space-x-4 text-white py-3 text-3xl flex justify-center md:justify-start">
              <a href="https://www.instagram.com/teamaveon/?hl=en"><FaSquareInstagram className="hover:scale-110 duration-300 hover:text-pink-700 active:scale-150"/> </a>
              <a href="https://www.facebook.com/TeamAveonRacing/"><FaFacebookSquare className="hover:scale-110 duration-300 hover:text-blue-700 active:scale-150" /></a>
              <a href="https://in.linkedin.com/company/team-aveon"><FaLinkedin className="hover:scale-110 duration-300 hover:text-blue-500 active:scale-150"/></a>
              <a href="https://twitter.com/TeamAveon"><FaSquareTwitter className="hover:scale-110 duration-300 hover:text-blue-500 active:scale-150"/></a>
            </div>
            </div>  
          </article>
          
          
          <div className="grid md:grid-cols-2 grid-cols-1 justify-between w-[50%] gap-3 overflow-hidden items-center text-center md:text-left pt-6">
            
            <div className="list1">
              <p className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</p>
              <div className="list-none mb-10">
                <li><Link to={'/'} className="text-white hover:font-semibold">Home</Link></li>
                <li><Link to={'/'} className="text-white hover:font-semibold">About</Link></li>
                <li><Link to={'/Team'}  className="text-white hover:font-semibold">Team</Link></li>
                <li><Link to={'/Gallery'}  className="text-white hover:font-semibold">Gallery</Link></li>
              </div>
            </div>
            <div className="list2">
              <p className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</p>
                <div className="list-none mb-10">
                  <li><a href='#Home' className="text-white hover:font-semibold hover:cursor-pointer">Back to top</a></li>
                  {/* <li><a onClick={click} className="text-white hover:font-semibold hover:cursor-pointer">NewsLetter</a></li> */}
                  <li><a href='https://www.bitmesra.ac.in/' className="text-white hover:font-semibold hover:cursor-pointer">Our Institute</a></li>
                  <li><a href='https://teamaveon.org' className="text-white hover:font-semibold hover:cursor-pointer">Team Aveon</a></li>
                  <li><a href='https://teamaveon.org' className="text-white hover:font-semibold hover:cursor-pointer">Team Aveon</a></li>
                  {/* <li><a onClick={click} className="text-white hover:font-semibold hover:cursor-pointer">Contact Us</a></li> */}
                </div>
              </div>
              
              

              
              
              
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.322781520855!2d85.44016630160675!3d23.41270440249969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb53f0c27be7%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1705780739414!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="min-w-[300px] mx-auto md:mx-0 rounded-xl border-[2px] border-[#4150d8]"></iframe>

          </div>
        </div>
    
      </footer>
    </div>
  )
}

export default Footer
