import React from 'react'

const Article = (props) => {
  return (
    <div className='w-[320px] mx-10 my-4 md:text-left text-center'>
       <img className='w-[325px] my-6 rounded-2xl' src={props.img} alt="" />
       <span className='my-2 poppins font-bold text-[16px] md:text-[21px] text-[#0E2368]'>{props.title}</span>
       <p className='text-[#444957] sans text-xs md:text-[15px] font-normal my-4 w-full md:w-[320px]'>{props.subtitle}</p>
       <button className='mt-4 source text-[11px] md:text-base text-[#424961] border-[#424961] border rounded-full py-1 px-7 md:py-2 md:px-6'>Read More</button>
    </div>
  )
}

export default Article