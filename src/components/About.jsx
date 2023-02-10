import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className='flex justify-around w-full items-center my-20'>
      <div className="left md:px-5">
        <img className='hidden md:block w-[384px]' src={about} alt="about" />
      </div>
      <div className="right">
        <div className='md:w-[450px] md:px-9 m-auto md:text-left text-center w-[80%]'>
            <div className='text-[#0E2368] poppins text-[26px] md:text-[45px] font-semibold'>About Us</div>
            <p className='sans text-[11px] md:text-[15px] my-4 md:leading-[27px] font-normal text-[#444957]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
            <button className='source text-[11px] md:text-base font-semibold leading-[36px] bg-[#E23744] text-white py-[1px] px-[20px] md:py-[8px] md:px-[30px] rounded-full mt-2 md:mt-8'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
