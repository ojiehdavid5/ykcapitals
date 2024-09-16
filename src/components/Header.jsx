import React,{useState} from 'react'
import "./header.css"
import Logo from "../assets/Logo.png"
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { AlignJustify,X } from 'lucide-react';

const header = () => {
  const[visibleRight,setVisibleRight]=useState(false);
  return (
              <header className='bg-[#b3def4] w-full'>
    <img src={Logo} className=' logo' />
    <span className='header-content'>
      <p>About us</p>
      
      <p>Contact us</p>
      
      
      
      
      
      
      
      
    </span>
     {/* <Button icon="pi pi-arrow-right"   /> */}
     <AlignJustify  onClick={() => setVisibleRight(true)} className='menu' />



    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='h-full bg-[#fff] text-left flex flex-col justify-between gap-10' >
{/* <X className='relative top-[1rem]' /> */}
    <h2 className='mb-[2rem] text-[1rem]  ml-7  text-gray-300'>About us</h2>
    <h2 className="mb-[2rem] text-[1rem] text-gray-300  ml-7 ">Contact us</h2>
    
</Sidebar>


      

    </header>
  )
}

export default header
