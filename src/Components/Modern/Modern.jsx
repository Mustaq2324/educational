import React from 'react'

function Modern() {
  return (
    <div className='bg-white [#fff9ea]'>
        <h1 className='lg:text-4xl text-2xl font-semibold lg:w-[950px] mx-auto text-[#25283A]  text-center pt-10 font-montserrat'> <span className='text-[#4d9cfd]'>EMPOWERING</span> MODERN DAY EDUCATION</h1>

<div className='flex flex-col lg:flex-row bg-[#4A8AD9] shadow-2xl justify-center items-center mt-32  pt-10 lg:pt-[50px] gap-14 pb-20 lg:pb-[150px] lg:w-[1200px] mx-auto lg:relative'>
   <div className='lg:absolute flex gap-20  rounded-2xl lg:flex-row -top-10 flex-col'>
   <div className='bg-white shadow-lg  w-[290px] lg:w-[320px] lg:h-[230px]  h-[250px] rounded-xl flex flex-col justify-center p-2 ps-3 gap-4'>
        <h5 className='font-bold text-[#25283A] uppercase'>Teachers</h5>
        <p className='text-[#808083]'>We believe in the power of collaboration. Our team works together
to achieve common goals, and we celebrate individual and collective successes.</p>
        <div>
            <button className='border-[1px] border-[#4D9CFD] text-white bg-[#4D9CFD]  px-6 py-1 rounded-lg'>See More</button>
        </div>
    </div>
    <div className='bg-white shadow-lg w-[290px] lg:w-[320px]   h-[230px] rounded-xl flex flex-col justify-center p-2 ps-3 gap-4'>
        <h5 className='font-bold text-[#25283A] uppercase'>Students</h5>
        <p className='text-[#808083]'>Get bold and creative with your school assignments. Flipsnack allows you to unleash your imagination in the easiest possible way.</p>
        <div>
            <button className='border-[1px] border-[#4D9CFD] bg-[#4D9CFD]  text-white px-6 py-1 rounded-lg'>See More</button>
        </div>
    </div>
    <div className='bg-white shadow-lg w-[290px] lg:w-[320px] h-[230px] rounded-xl  top-0 flex flex-col justify-center p-2 ps-3 gap-4'>
        <h5 className='font-bold text-[#25283A] uppercase'>Schools</h5>
        <p className='text-[#808083]'>
         Schedule a call or video meeting to discuss your educational goals,
tutoring options and any specific requirements you may have.</p>
        <div>
            <button className='border-[1px] border-[#4D9CFD] text-white bg-[#4D9CFD]  px-6 py-1 rounded-lg'>See More</button>
        </div>
    </div>
   </div>

            </div>



        </div>
    )
}

export default Modern