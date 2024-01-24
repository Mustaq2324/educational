import React from "react";
import a2 from "../assets/a5.jpg"
import a3 from "../assets/a6.jpg"
import a4 from "../assets/a7.jpg"
const About = () => {
  return (
    <div>
      <div className='  flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>

        <div className="">
          <img className="w-[500px] rounded" src={a2} lt="" />
        </div>
        <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
          <h1 className='lg:text-5xl text-2xl font-semibold text-center'>Explore Our Programs</h1>
          <p className='text-[#808083] text-justify lg:w-[450px]'>Start your journey with Link’s Institute by exploring our diverse
            range of tutoring programs. Browse through subjects, grade levels and available tutors to find
            the perfect fit for your academic needs.</p>

        </div>
        <div className="hidden">
          <img className="w-[500px] rounded" src={a2} lt="" />
        </div>
      </div>

      <div className=' bg-[#FFE39D] flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>


        <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
          <h1 className='lg:text-5xl text-2xl font-semibold text-center'>Contact Us for Information:</h1>
          <p className='text-[#808083] text-justify lg:w-[450px]'>Have questions or need more information? Feel free to reach
            out to our dedicated support team. You can contact us via phone calls, WhatsApp, Telegram,
            email or by filling out the online enquiry form on our website.</p>

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
          <h1 className='lg:text-5xl text-2xl font-semibold text-center'>Speak with an Advisor</h1>
          <p className='text-[#808083] text-justify lg:w-[450px]'>If you prefer a one-on-one conversation, our academic advisors are
            available to assist you. Schedule a call or video meeting to discuss your educational goals,
            tutoring options and any specific requirements you may have.</p>

        </div>
        
      </div>

    </div>
  );
};

export default About;
