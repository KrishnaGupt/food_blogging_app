import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='flex w-full m-auto justify-between my-20 md:flex-row flex-col'>
    <div className='flex items-center justify-around md:w-[75%] md:flex-row flex-col w-full'>
        <div className='first'>
            <img src={logo} alt="logo" />
        </div>
        <div className="second md:w-56 w-[90%] my-6 source">
            <div className='text-[#0E2368] text-lg font-semibold mb-4'>Contact Us</div>
            <div className='add text-[#646874] text-md font-normal'>
            <p className='my-4'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p className='my-4'>example2020@gmail.com</p>
            <p className='my-4'>(904) 443-0343</p>
            </div>
        </div>
        <div className="third source md:w-auto w-[90%]">
            <div className='text-[#0E2368] text-lg font-semibold md:w-auto w-[90%]'>More</div>
            <div className='text-[#646874] text-md font-normal flex flex-col'>
                <span className='my-3'>About Us</span>
                <span className='my-3'>Product</span>
                <span className='my-3'>Career</span>
                <span className='my-3'>Contact Us</span>
            </div>
        </div>
    </div>
        <div className="source md:w-[20%] my-10 mx-auto text-center md:m-0 w-[90%] md:block flex flex-col-reverse">
            <div>
                <div className='text-[#0E2368] hidden md:block text-lg font-semibold'>Social Links</div>
                <div className='text-[#0E2368] text-2xl mt-4'>
                    <span className='ml-0 mx-4'><i className="bi bi-instagram"></i></span>
                    <span className='mx-4'><i className="bi bi-twitter"></i></span>
                    <span className='mx-4'><i className="bi bi-facebook"></i></span>
                </div>
            </div>
        <p className='md:mt-28 text-[#828B9C] font-normal roboto m-0 md:-ml-16'>© 2022 Food Truck Example</p>
        </div>
        </div>
  )
}

export default Footer