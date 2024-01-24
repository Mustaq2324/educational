import React from "react";
import a2 from "../assets/a8.jpg"
import a3 from "../assets/a9.jpg"
import a4 from "../assets/a10.jpg"
const Join = () => {
    return (
        <div>
            <div className='  flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>

                <div className="">
                    <img className="w-[500px] rounded" src={a2} lt="" />
                </div>
                <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
                    <h1 className='lg:text-5xl text-2xl font-semibold text-center'>Professional Growth</h1>
                    <p className='text-[#808083] text-justify lg:w-[450px]'>At Links Institute, we invest in the development of our team
                        members. From ongoing training opportunities to mentorship programs, we are committed to
                        fostering a culture of continuous learning and professional growth.</p>

                </div>
                <div className="hidden">
                    <img className="w-[500px] rounded" src={a2} lt="" />
                </div>
            </div>

            <div className=' bg-[#FFE39D] flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>


                <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
                    <h1 className='lg:text-5xl text-2xl font-semibold text-center'>Innovative Environment</h1>
                    <p className='text-[#808083] text-justify lg:w-[450px]'>Join a team that values creativity and embraces technology to
                        enhance the learning experience. We are at the forefront of online education, constantly
                        exploring new ways to deliver quality tutoring services.</p>

                </div>
                <div>
                    <img className="w-[500px] rounded" src={a3} lt="" />
                </div>
            </div>

            <div className=' flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>
                <div>
                    <img className="w-[500px] rounded" src={a4} lt="" />
                </div>

                <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
                    <h1 className='lg:text-5xl text-2xl font-semibold text-center'>Collaborative Culture</h1>
                    <p className='text-[#808083] text-justify lg:w-[450px]'>We believe in the power of collaboration. Our team works together
                        to achieve common goals, and we celebrate individual and collective successes.</p>

                </div>

            </div>
            <div className=' flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>


                <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10 bg-[#FFE39D] p-4'>
                    <h1 className='lg:text-5xl text-2xl font-semibold text-center'>How to Apply</h1>
                    <p className='text-[#808083] text-justify lg:w-[450px] p-4'>If you are passionate about education, dedicated to student success, and eager to contribute to
                        an innovative learning environment, we want to hear from you! To apply for current openings
                        or express your interest in future opportunities, please send your resume and cover letter to
                        linksinstitute2023@gmail.com</p>

                </div>

            </div>

        </div>
    );
};

export default Join;
