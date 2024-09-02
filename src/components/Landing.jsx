import React from 'react'
import "./Landing.css";
import Header from "../components/Header"
import image from "../assets/image.png"
import image1 from "../assets/mobile.png"
import X from "../assets/x.png"


const Landing = () => {
  return (

    <div className="wrapper ">
      <Header/>
      <div className='main'> 
        <div className=" text">
          <h1 className='leading-[5rem] '>
          Investing In The
          Future OF <span className=' bg-clip-text  text-transparent bg-gradient-to-r from-blue-800 to-blue-400 web3'>Web3</span> <span className=' bg-clip-text  text-transparent bg-gradient-to-r from-blue-800 to-blue-400 crypto'>Crypto</span>
          </h1>
          <p className='text-gray-400'>
          We support the next generation of resilient founders building
          innovative blockchain products
          </p>

        </div>
        <div className="image ">
          <h1 className='want' >Want To Get<br/>
          In Touch With Us?</h1>

          <button className='flex space-x-7 '>
          <img src={X} className='w-[17%]'/> <p className='text-[20px] font-[400] '>Follow us on X</p>

          </button>

          <img src={image} className='w-[80%]  image1'/>
          <img src={image1} className='w-[80%] image2'/>
          

        </div>

       
        
      </div>
      <hr className='mt-[2rem] mb-[2rem]'/>

      <p className='text-center text-gray-400'>©2024 <span className='ml-5 mt-9' >www.vnkcapital.com</span></p>

      
    </div>
  )
}

export default Landing
