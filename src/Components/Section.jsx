import React from 'react'

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
            src="https://img.freepik.com/free-photo/international-day-education-scene-with-fantasy-style_23-2151040354.jpg?t=st=1705484094~exp=1705487694~hmac=5de62704e589618d2bc76fa901152b30e8367a47133b2407682f8b4f5e1b2074&w=996"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-[#F8F9FD]">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-[#F8F9FD]"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
        <h1 className="text-4xl font-bold text-[#25283A] sm:text-6xl xl:text-8xl  font-montserrat
">
        <span className='text-[#4C9BFB]'>Talent </span>and Trust
              </h1>

             
              <p className="mt-5 text-base text-gray-700 text-justify">Who brings (big) heart and soul into our programs every day? Our <u>teachers!</u> They’re experts at caring for kids and leading your child’s learning journey. Don’t be surprised if they start to feel like family. </p>
              <ul className='flex flex-col gap-4 text-gray-700 mt-4 text-justify'>
                <li>We hire people who love and understand children and are eager to be your partner in parenting.</li>
                <li>Your kiddo will benefit from our whole-child curriculum (Early Foundations®) that’s built by our in-house team of education masterminds who continually build and refine it to meet the needs of young minds. </li>
              </ul>
          
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section