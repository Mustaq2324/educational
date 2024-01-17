import React, { useState } from 'react';
import { MdDesignServices } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const BrightFuture = () => {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto text-[#4C9BFB] max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#25283A] font-montserrat sm:text-4xl xl:text-5xl "> <span className='text-[#4C9BFB]'>BrightFuture</span> Champions</h2>
            {/* <p className="mt-4 text-base leading-7 text-[#7C7E87] sm:mt-8 ">Lorem ipsum dolor sit amet, consectetur adipis elit</p> */}
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
              <MdDesignServices className="mx-auto text-[#4C9BFB]  text-3xl"/>
                <h3 className="mt-12 text-2xl font-bold text-[#25283A] ">Qualified Tutors</h3>
                <p className="mt-5 text-base text-[#7C7E87] ">Our team of dedicated tutors consists of experienced professionals experts who are passionate about education.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-[#4A8AD9]">
            <FaDollarSign className='mx-auto text-[#4C9BFB] text-3xl' />
                <h3 className="mt-12 text-xl font-bold text-[#25283A] ">Our Approach</h3>
                <p className="mt-5 text-base text-[#7C7E87] ">LINKS isn't just about tutoring. We mix supe­rior academics with a positive, uplifting atmosphere­.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-[#4A8AD9]">
            <svg className="mx-auto text-[#4C9BFB]" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41 1H1V41H41V1Z" stroke="#4C9BFB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 7H7V20H18V7Z" stroke="#4C9BFB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 26H7V35H18V26Z" stroke="#4C9BFB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35 7H24V35H35V7Z" fill="none" stroke="#4C9BFB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <h3 className="mt-12 text-xl font-bold text-[#25283A] ">Explore Our Programs</h3>
                <p className="mt-5 text-base text-[#7C7E87] ">Start your journey with Link’s Institute by exploring our diverse range of tutoring programs.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-[#4A8AD9]">
            <svg className="mx-auto text-[#4C9BFB]" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25" stroke="#4C9BFB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 1C9.059 1 1 9.059 1 19H19V1Z" fill="none" stroke="#4C9BFB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-[#25283A] ">Innovative Environment</h3>
                <p className="mt-5 text-base text-[#7C7E87] ">Join a team that values creativity and embraces technology to enhance the learning experience.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-[#4A8AD9] md:border-t">
                <svg className="mx-auto text-[#4C9BFB]" width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                        fill="none"
                        stroke="#4C9BFB"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                        stroke="#4C9BFB"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-[#25283A] ">Collaborative Culture</h3>
                <p className="mt-5 text-base text-[#7C7E87] ">We believe in the power of collaboration. Our team works together to achieve common goals

</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-[#4A8AD9] md:border-t">
               <MdDesignServices className='mx-auto text-[#4C9BFB] text-3xl'/>
                <h3 className="mt-12 text-xl font-bold text-[#25283A] ">Cutting-Edge Technology</h3>
                <p className="mt-5 text-base text-[#7C7E87] ">Utilizing state-of-the-art online learning platforms, we create engaging .</p>
            </div>
        </div>
    </div>
</section>

    )
}
export default BrightFuture;