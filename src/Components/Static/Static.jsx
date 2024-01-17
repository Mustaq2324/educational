import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Static() {
    const stats = [
        {
            data: "35",
            title: "Customers"
        },
        {
            data: "40",
            title: "Countries"
        },
        {
            data: "30",
            title: "Total revenue"
        },
    ];
const [CounterOn,SetCounter]=useState(false)
    return (
        <section className="py-12   sm:py-16 md:py-20 lg:py-24 bg-[#F8F9FD] flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 lg:ps-32 ps-2">
            <div className="flex-1 md:max-w-md mx-auto md:mx-0 md:mr-8 ps-1">
                <h1 className=" text-3xl font-bold text-[#25283A] sm:text-4xl mb-4 sm:mb-6 lg:pt-16">Latest blog <span className="text-[#4C9BFB]">posts</span> </h1>
                <p className=" mb-6 ps-5 lg:ps-0 text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative flex-1">
                        <svg className="w-6 h-6  absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full pl-12 pr-3 py-2  bg-transparent bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                        />
                    </div>
                    <button className="block w-auto mt-3 sm:mt-0 py-3 px-4 font-medium text-sm text-center text-white bg-[#4C9BFB] hover:bg-gray-700 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                        Subscribe
                    </button>
                </form>
            </div>

            <div className="flex-1 max-w-screen-xl mx-auto mt-8 md:mt-0 px-1">
                <div className="max-w-2xl mx-auto ">
                    <h3 className=" text-3xl font-bold uppercase sm:text-4xl mb-4 sm:mb-6 text-center text-[#25283A]">Our customers are always happy</h3>
                    <p className=" ps-3 text-gray-600">We understand that every student is unique. Our tutors tailor their approach to meet individual learning styles and needs.</p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col gap-4 sm:flex-row items-center justify-center">
                        {stats.map((item, idx) => (
                            <li key={idx} className="w-full text-center bg-white text-black px-6 py-4 rounded-lg sm:w-auto">
                                <ScrollTrigger onEnter={()=>SetCounter(true)} onExit={()=>SetCounter(false)}>
                                <h4 className="text-2xl sm:text-4xl text-[#4C9BFB] font-semibold">
                                    {CounterOn&& <CountUp start={0} end={item.data} duration={2} delay={0} />   }
                                                            +
                                    </h4>
                                    </ScrollTrigger>
                                <p className="mt-2 text-gray-700 font-medium">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Static;