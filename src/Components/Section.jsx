import React from 'react'
import Hero from './Hero/Hero'
import hero1 from "../assets/hero2.png"

function Section() {
  return (
    <div>
        <section>
  <div className="mx-auto bg-white max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src={hero1}
            // "https://img.freepik.com/free-photo/international-day-education-scene-with-fantasy-style_23-2151040354.jpg?t=st=1705484094~exp=1705487694~hmac=5de62704e589618d2bc76fa901152b30e8367a47133b2407682f8b4f5e1b2074&w=996"
            className="absolute inset-0  object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-[#F8F9FD]">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-[#F8F9FD]"
        ></span>

        <div className=" sm:p-16 lg:p-24">
        <h1 className="text-4xl font-bold text-[#25283A] sm:text-5xl xl:text-7xl  font-montserrat
">
        <span className='text-[#4C9BFB] '>Talent </span>and Trust
              </h1>

             
              <p className="mt-5 text-base text-gray-700 text-justify">At LINK’S, we are driven by a steadfast belief in the profound impact of education. Our commitment is to go beyond the conventional boundaries of classroom learning, offering a transformative educational experience that resonates with the real world. At the core of LINK’S philosophy is the conviction that connecting subject knowledge to real-life experiences is the key to preparing students for success.</p>
              
          
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section