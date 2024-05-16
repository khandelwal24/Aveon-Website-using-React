import React, { useState } from 'react'

function Contact() {

    let[formData,setformData] = useState({
        uname:'',
        uemail:'',
        umessage:'',
    })

    let getVal = (e)=>{
        let oldVal = {...formData}
        let inputName = e.target.name
        let inputVal = e.target.value
        oldVal[inputName]=inputVal;
        setformData(oldVal);
    }

    let handleSubmit = (e)=>{
        e.preventDefault();

        setformData({
        uname:'',
        uemail:'',
        umessage:'',
        })
    }

  return (
    <div>
      <section className=" w-[100%] lg:py-[70px] py-[50px] border-t-[2px] border-gray-200">
        <div className="max-w-[1260px] mx-auto sm:px-[24px] px-[20px] overflow-hidden">
            <div className="md:text-5xl text-4xl font-bold text-center mx-auto mb-6 text-gray-200" style={{fontFamily:'Orbitron'}}>
                Contact <span className="text-[#4150d8]">Us</span>
            </div>
            <hr className="w-1/4 mx-auto text-center mb-10"/>
            <div data-aos="flip-left" data-aos-duration="6000"  className="text-white opacity-95 flex items-center justify-center max-w-[750px] space-x-3 bg-gray-900 py-7 mx-auto rounded-3xl overflow-hidden" style={{boxShadow:'2px 2px 2px rgb(119, 118, 118)'}}>

              
              <form onSubmit={handleSubmit} className="space-y-8 flex-col flex mx-auto justify-center items-center w-full">
                     
                     <p className="flex flex-col xs:flex-row items-center justify-center gap-4 w-full px-3">
                      <label for="name" className="text-xl block ">Name : </label>
                      <input type="text" name='uname' value={formData.uname} onChange={getVal} id="name" placeholder="Enter your Name" className="p-2 bg-transparent border-b-[1px] rounded-sm"/>
                     </p> 
                     
                     <p className="flex flex-col xs:flex-row items-center justify-center gap-4 w-full px-3">
                      <label for="email" className="text-xl block">E-mail : </label>
                      <input type="email" name='uemail' value={formData.uemail} onChange={getVal} id="email" placeholder="E-mail" className="p-2 bg-transparent border-b-[1px] rounded-sm"/>
                     </p>
                      
                      <p className="flex flex-col xs:flex-row items-center justify-center gap-4 w-full px-3">
                        <label for="message" className="text-xl block">Message here : </label>
                        <textarea id="message" name='umessage' value={formData.umessage} onChange={getVal} cols="20" rows="3" placeholder="Enter your Message here" className="p-2 bg-transparent border-b-[1px] rounded-sm"></textarea>
                      </p>

                      <button type="submit" className="bg-gray-700 text-white text-center p-2 rounded-full mx-auto w-24  hover:bg-gray-600 mb-6 text-xl">Submit</button>
                    </form>
                       
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
