import React from "react";
import AboutVision from "../Components/AboutVision/AboutVision";
import ShuffleHero from "../Components/About/About";
import Section from "../Components/Section/Section";
import Lottie from "lottie-react";
import animation from "../assets/Animation - 1704634640169.json";
import img from "../assets/boy.png"
import a1 from "../assets/Business_team_2.png"
import a2 from "../assets/a2.png"
import a3 from "../assets/a3.png"
import a4 from "../assets/a4.png"
import Newsletter from "../Components/Newsletter/Newsletter";
import Testimonal from "../Components/Testimonal/Testimonal";
import about from "../assets/about-1.png"
const About = () => {
  return (
    <div>
      {/* <ShuffleHero/>
      <Section />
        <AboutVision/>
         */}
 <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
    </div>
    <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
                <div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold leading-tight text-[#25283A] sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">It's Now Easier to Get Quality Education</h1>
                        <p className="mt-2 text-lg text-[#2563EB] sm:mt-8 font-inter">we believe in the transformative power of education.</p>

                        <form action="#" method="POST" className="mt-8 sm:mt-10">
                            <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter email address"
                                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                    required=""
                                />
                                <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                    <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-[#358FFF] rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Sumbit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                  <Lottie animationData={animation}/>
                </div>
            </div>
        </div>
    </section>


    <div class="bg-gradient-to-b from-[#F8F9FD] to-[#ffffff] ">
 <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">              
                <div>
                    <img class="w-full" src={about} alt="" />
                </div>
                <div>
                    <h1 class="text-4xl font-bold text-[#25283A] sm:text-6xl lg:text-7xl">
                        LINK’S Education 
                        <div class="relative inline-flex">
                            <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#358FFF]"></span>
                            <h1 class="relative text-4xl font-bold text-[#25283A] sm:text-6xl lg:text-7xl">unfolds</h1>
                        </div>
                    </h1>

                    <p class="mt-8 text-base text-gray-600 text-justify">At LINK’S, we are driven by a steadfast belief in the profound impact of education. Our commitment is to go beyond the conventional boundaries of classroom learning, offering a transformative educational experience that resonates with the real world. At the core of LINK’S philosophy is the conviction that connecting subject knowledge to real-life experiences is the key to preparing students for success.</p>
                </div>  
            </div>
        </div>
    </section>
</div>



      {/* <div className="bg-[#F8F9FD] flex-col lg:flex-row justify-center gap-5 lg:gap-0 pt-10 lg:pt-0  overflow-hidden flex items-center lg:justify-around">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-Roboto font-bold text-2xl text-center lg:text-5xl lg:text-left    lg:w-[350px]">
              It's Now Easier to Get Quality Education
            </h1>
          </div>
          <p className=" mt-4 px-4 text-center lg:px-0 lg:text-left   lg:w-[350px]">
          we believe in the transformative power of education.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <input
              type="Email"
              className="bg-[#EFEFFB] bg-transparent  border-2 border-gray-800 text-white outline-none rounded py-2 px-7"
              placeholder="Type Your Email"
            />
            <div>
              <button className="text-white bg-gray-800 px-6 py-2 rounded ">
                Sumbit
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <Lottie
            className="lg:w-[550px] w-[350px]"
            animationData={animation}
          />
        </div>
      </div> */}
      {/* // bg-[#EDEDF9] */}



{/* 
      <div className='  flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>

        <div className='flex flex-col gap-7 lg:mt-20 lg:ps-0 ps-2 mt-10'>
          <h1 className='lg:text-4xl text-xl font-semibold  lg:w-[650px] text-center lg:text-start'>LINK’S-Education unfolds.</h1>
          <p className='text-[#808083] lg:w-[450px]'>At LINK’S, we are driven by a steadfast belief in the profound impact of education. Our commitment is to go beyond the conventional boundaries of classroom learning, offering a transformative educational experience that resonates with the real world. At the core of LINK’S philosophy is the conviction that connecting subject knowledge to real-life experiences is the key to preparing students for success.</p>
          <div >
            <button className='bg-gray-800 text-white py-1 px-5 rounded '>See More</button>
          </div>
        </div>
        <div>
          <img className="w-[450px] rounded" src={img} lt="" />
        </div>
      </div> */}


      <div className=' bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>
        

        <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
          <h1 className='lg:text-5xl text-2xl text-[#25283A]  font-semibold text-center'>Our <span className="text-[#358FFF]">Mission</span> </h1>
          <p className='text-[#808083] text-justify lg:w-[450px]'>At LINK’S, our mission is to provide an educational experience that transcends traditional methods. We are dedicated to equipping our students with not just theoretical knowledge but also practical skills and critical thinking abilities. Through hands-on projects, internships, and active community engagement, we aim to bridge the gap between theory and practice. Our goal is to empower students to apply their knowledge meaningfully in diverse scenarios, ensuring they are well-prepared to thrive in the dynamic world around them.</p>

        </div>
        <div>
          <img className="w-[500px] rounded-xl" src={a1}
          // "https://img.freepik.com/free-photo/university-student-using-headphones-laptop-attend-online-class-video-call-meeting-woman-talking-teacher-remote-videoconference-educational-live-communication_482257-43337.jpg?w=1380&t=st=1705603655~exp=1705604255~hmac=2b2118d3260e391edab8d89ecdac334eed2e11624bbd1115d2e03f8295b7e68b" 
           />
        </div>
      </div>


      <div className='bg-gradient-to-b from-[#F8F9FD] to-[#ffffff]   flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>

      <div className="">
          <img className="w-[500px] rounded-xl" src={a2}
          // "https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-7130.jpg?w=740&t=st=1705603791~exp=1705604391~hmac=bf9ec14afe13a2282326dab6fd20dad6db45206085758c327d36fbb33270966d"
          />
        </div>
        <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
          <h1 className='lg:text-5xl text-2xl text-[#25283A]  font-semibold text-center'>Our <span className="text-[#358FFF]">Vision</span> </h1>
          <p className='text-[#808083] text-justify lg:w-[450px]'>LINK’S envisions a world where every student has access to personalized and effective learning experiences. We aspire to cultivate a lifelong love for learning, fostering an environment where education is a continuous journey of exploration and growth.</p>

        </div>
        <div className="hidden">
          <img className="w-[500px] rounded" src={a2} lt="" />
        </div>
      </div>

      <div className=' bg-gradient-to-b from-blue-50 to-blue-100  flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>
       

        <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
          <h1 className='lg:text-5xl text-2xl text-[#25283A]  font-semibold text-center'>Our  <span className="text-[#358FFF]">Team</span> </h1>
          <p className='text-[#808083] text-justify lg:w-[450px]'>The backbone of LINK’S is our team of dedicated tutors, comprised of experienced professionals and subject matter experts who are truly passionate about education. With a wealth of practical knowledge and a commitment to nurturing the potential in every student, our tutors bring a unique blend of expertise and enthusiasm to the learning process.</p>

        </div>
        <div>
          <img className="w-[500px] rounded" src={a3} lt="" />
        </div>
      </div>

      <div className='bg-gradient-to-b from-[#F8F9FD] to-[#ffffff]  flex flex-col lg:flex-row gap-7 lg:gap-0 pb-10 pt-10 justify-evenly items-center'>
      <div>
          <img className="w-[500px] rounded" src={a4} lt="" />
        </div>

        <div className='flex flex-col gap-7 lg:mt-0 lg:ps-0 ps-2 mt-10'>
          <h1 className='lg:text-5xl text-2xl text-[#25283A]  font-semibold text-center'>Our <span className="text-[#358FFF]">Approach</span> </h1>
          <p className='text-[#808083] text-justify lg:w-[450px]'>At LINK’S, our approach goes beyond traditional tutoring. We combine academic excellence with a supportive and encouraging environment, fostering confidence and a genuine love for learning. Our students not only gain knowledge but also develop the skills and mindset needed to navigate an ever-evolving world successfully..</p>

        </div>
        <div className="hidden">
          <img className="w-[500px] rounded" src={a4} lt="" />
        </div>
      </div>
      {/* {Works} */}
<section className="py-10 bg-gradient-to-b from-blue-50 to-blue-100  sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-[#25283A]  font-montserrat sm:text-4xl lg:text-5xl">How does it <span className="text-[#358FFF]">work?</span> </h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>




                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-blue-600 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-800 md:mt-10">Create a free account</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-blue-600 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-800 md:mt-10">Build your website</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-blue-600 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-800 md:mt-10">Release & Launch</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
      <Testimonal/>

    </div>
  );
};

export default About;
// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About