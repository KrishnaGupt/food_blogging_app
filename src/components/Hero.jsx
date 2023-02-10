import React from 'react'
import Navbar from './Navbar'
import pizza from '../assets/pizza.png'
import vector from '../assets/vector.png'

const hero = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Navbar/>
    <div className='flex justify-between relative md:top-[-92px] md:flex-row flex-col-reverse  w-full z-[-1]'>
      <div className="left flex justify-center items-center w-auto md:mt-0 mt-8 md:w-[40%] md:ml-[30px]">
        <div className='md:text-left p-0 text-center md:pl-[10px]'>
        <div className='source tag md:text-[50px] xl:text-[62px] xl:leading-[69px] leading-[46px] text-[38px] text-[#0E2368] md:leading-[45px] font-bold'>Discover the <br /> <span className='text-[#E23744]'>
           Best </span> Food <br /> and Drinks</div>
        <div><p className='text-[#444957] para sans font-normal pr-4 w-[70%] md:w-auto m-auto py-4 md:text-base text-[11px] md:text-left text-center'>Naturally made Healthcare Products for the better care & support of your body.</p></div>
        <div>
          <button className='text-[12px] md:text-base my-6 bg-[#E23744] px-[25px] py-[10px] md:px-[34px] md:py-[14px] sans font-bold text-white rounded-full'>Explore Now!</button>
        </div>
        </div>

      </div>
      <div className="right flex justify-end xl:w-[53%]">
    <img className='pizza md:w-[450px] lg:w-[600px] xl:w-[49%] 2xl:w-[700px] w-full absolute z-[-1]' src={pizza} alt="hero" />
    <img className='vector md:w-[450px] lg:w-[600px] xl:w-[92%] 2xl:w-[700px]  w-full' src={vector} alt="vector" />
      </div>
    </div>
      </div>
    </div>
  )
}

export default hero
