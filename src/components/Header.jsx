import React,{useState} from 'react'
import "./header.css"
import Logo from "../assets/Logo.png"
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { AlignJustify } from 'lucide-react';

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



    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='h-full bg-[#fff] text-center flex flex-col justify-between gap-10' >
    <h2 className='mb-[2rem] text-[2rem]'>About us</h2>
    <h2 className="mb-[2rem] text-[2rem]">Contact us</h2>
    
</Sidebar>


      

    </header>
  )
}

export default header
