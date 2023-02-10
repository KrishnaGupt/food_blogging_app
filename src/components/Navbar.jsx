import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='relative w-full'>
      <div className="flex w-[95%] md:h-[90px] xl:h-auto items-center justify-between m-auto">
        <img className='logo w-[65px] xl:w-[107px] hidden md:block pl-[10px] xl:pt-[15px]' src={logo} alt="logo" />
        <button className='outline-none absolute md:static right-[3%] top-[20px] border rounded-2xl py-1 px-3 border-white text-white source font-semibold text-[11px] md:text-base'>Get in Touch</button>
      </div>
    </div>
  )
}

export default Navbar
