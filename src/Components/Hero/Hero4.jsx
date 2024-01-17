import React from 'react'
import hero from "../../assets/hero2.jpg"
import hero1 from "../../assets/hero1.png"
import Lottie from 'lottie-react'
import animation from "../../assets/Animation - 1705473770117.json"
function Hero4() {
  return (
    <div>
        <div className="bg-white">
 

    <section className="bg-white bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1  gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">A social media for learners</p>
                    <h1 className="mt-4 text-4xl font-bold text-[#25283A] lg:mt-8 sm:text-6xl xl:text-8xl">Connect & learn from the experts</h1>
                    <p className="mt-4 text-base text-[#25283A] lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>

                    <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 rounded-full lg:mt-16 hover:bg-[#7C7E87]
bg-[#358FFF]" role="button">
                        Join for free
                        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

                    <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p>
                </div>

                <div className='mx-a'>
                {/* <Lottie
            className="lg:w-[550px]  w-[300px]"
            animationData={animation}
          /> */}

                    <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>
</div>
  )
}

export default Hero4