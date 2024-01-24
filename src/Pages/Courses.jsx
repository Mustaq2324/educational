import React from 'react'
import PriceCardMobile from '../Components/PriceCard/PriceCardMobile'
import NiosMobile from '../Components/PriceCard/NiosMobile'
import StateBoardMobile from '../Components/PriceCard/StateBoardMobile'
import MainCards from '../Components/PriceCard/MainCards'
import FAQSection from '../Components/Faq/Faq'


const Courses = () => {
  return (
    <div>
        <div className=" overflow-hidden relative lg:flex lg:items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h1 className="mt-4 text-4xl font-bold text-[#25283A] lg:mt-8 sm:text-6xl">Empower Your Future with <span className='text-[#358FFF]'>Knowledge</span> </h1>
        <p className="text-md mt-4 text-gray-600">
        Dive into our curated courses designed to enhance your skills, expand your horizons, and propel you towards success.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button type="button" className="py-2 px-4  bg-[#358FFF] hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Explore Courses
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=740&t=st=1705645849~exp=1705646449~hmac=cf1e8eddc2ad82d94b372b8bd613fc78a6e0795eb6e06ffde88a8d2a95a9072c" className="w-1/2 rounded-lg" alt="Tree"/>
        <div>
          <img src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?w=996&t=st=1705645817~exp=1705646417~hmac=8477cb04248c50cde7737348f63c0c223c382b633d4fc2ada8713a535efeaeae" className="mb-8 rounded-lg" alt="Tree"/>
          <img src="https://img.freepik.com/free-photo/medium-shot-girl-posing-with-graduation-background_23-2150319879.jpg?w=996&t=st=1705645779~exp=1705646379~hmac=0c713615e327708b6be098bc60bcde5c1833afb005a660c479944d81d22261f3" className="rounded-lg" alt="Tree"/>
        </div>
      </div>
    </div>
     <MainCards/>
        <FAQSection/>
        
    </div>
  )
}

export default Courses