import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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

    // let handleSubmit = (e)=>{
    //   toast.success('Submitted Successfully');
    //   e.preventDefault();
    //   setformData({
    //     uname:'',
    //     uemail:'',
    //     umessage:'',
    //   })
    // }
    
    
    /* This was made using Web3 form web service */

    const [result, setResult] = React.useState("");

    const onSubmitt = async (event) => {
    toast.success('Submitted Successfully');
    event.preventDefault();
    setformData({
      uname:'',
      uemail:'',
      umessage:'',
    })
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "04f46d1a-f683-487a-b1ca-14468d9f455f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <section className=" w-[100%] lg:py-[70px] py-[50px] border-t-[2px] border-gray-200">
        <div className="max-w-[1260px] mx-auto sm:px-[24px] px-[20px] overflow-hidden">
            <div className="md:text-5xl text-4xl font-bold text-center mx-auto mb-6 text-gray-200" style={{fontFamily:'Orbitron'}}>
                Contact <span className="text-[#4150d8]">Us</span>
            </div>
            <hr className="w-1/4 mx-auto text-center mb-10"/>
            <div data-aos="flip-left" data-aos-duration="1000"  className="text-white backdrop-blur-lg bg-opacity-30 flex items-center justify-center max-w-[750px] space-x-3 bg-gray-900 py-7 mx-auto rounded-3xl overflow-hidden border-[1px] border-b-orange-100" style={{boxShadow:'5px 5px 10px rgb(119, 118, 118), -3px -5px 10px rgb(119, 118, 118)'}}>

    <ToastContainer theme='dark' />
              <form onSubmit={onSubmitt} className="space-y-8 flex-col flex mx-auto justify-center items-center w-full">
                     
                     <p className="flex flex-col xs:flex-row items-center justify-center gap-4 w-full px-3">
                      <label for="name" className="text-xl block ">Name : </label>
                      <input type="text" name='uname' value={formData.uname} onChange={getVal} id="name" placeholder="Enter your Name" className="p-2 bg-transparent border-b-[1px] rounded-sm" required/>
                     </p> 
                     
                     <p className="flex flex-col xs:flex-row items-center justify-center gap-4 w-full px-3">
                      <label for="email" className="text-xl block">E-mail : </label>
                      <input type="email" name='uemail' value={formData.uemail} onChange={getVal} id="email" placeholder="E-mail" className="p-2 bg-transparent border-b-[1px] rounded-sm" required/>
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
