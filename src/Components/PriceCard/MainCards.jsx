import React, { useState } from 'react';

// export default () => {
//     const plans = [
//         {
//             name: "CBSE",
//             price: 12,
//             features: [
//                 "One To One Sessions",
//                 "Limited Seats",
//             ],
//         },
//         {
//             name: "NIOS",
//             price: 35,
//             features: [
//                 "One To One Sessions",
//                 "Limited Seats",

//             ],
//         },
//         {
//             name: "State Board",
//             price: 60,
//             features: [
//                 "One To One Sessions",
//                 "Limited Seats",
//             ],
//         },
      
//         // Add more plans as needed
//     ];

   

//     return (
//         <section className='py-14'>
//         <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
//             <div className='relative max-w-xl mx-auto sm:text-center'>
//                 <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
//                     CBSE
//                 </h3>
               
//             </div>
//             <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
//                 {
//                     plans.map((item, idx) => (
//                         <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
//                             <div>
//                                 <span className='text-indigo-600 font-medium'>
//                                     {item.name}
//                                 </span>
//                                 <div className='mt-4 text-gray-800 text-3xl font-semibold'>
//                                     ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
//                                 </div>
//                             </div>
//                             <ul className='py-8 space-y-3'>
//                                 {
//                                     item.features.map((featureItem, idx) => (
//                                         <li key={idx} className='flex items-center gap-5'>
//                                             <svg
//                                                 xmlns='http://www.w3.org/2000/svg'
//                                                 className='h-5 w-5 text-indigo-600'
//                                                 viewBox='0 0 20 20'
//                                                 fill='currentColor'>
//                                                 <path
//                                                     fill-rule='evenodd'
//                                                     d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
//                                                     clip-rule='evenodd'></path>
//                                             </svg>
//                                             {featureItem}
//                                         </li>
//                                     ))
//                                 }
//                             </ul>
//                             <div className="flex-1 flex items-end">
//                                 <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
//                                     Get Started
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </section>
//     );
// };

const integrations = [
    {
        title: "CBSE",
        icon: "https://cdnbbsr.s3waas.gov.in/s3329e6581efbc90bd92a1f22c4ba2103d/uploads/2022/06/2022062325.png",
        href : "/cbse"

    }, {
        title: "NIOS",
        icon: "https://www.nios.ac.in/images/NIOSlogo_with_title.png",
        href : "/nios"

    }, {
        title: "State Board",
        icon: "https://www.tamilnadustateboard.org/wp-content/uploads/2023/09/final-logo3.jpg",
        href : "/state"

    },
]

export default () => (
    <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="">
            <h1 className='lg:text-5xl text-2xl text-[#25283A]  font-semibold text-center'>Our <span className="text-[#358FFF]">Courses</span> </h1>

            </div>
            <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    integrations.map((item, idx) => (
                        <li className="border rounded-lg">
                            <div className="flex items-center justify-between p-4 shadow-inner shadow-[#358FFF]">
                                <div className="space-y-2 text-center">
                                    <img src={item.icon} alt=""  className='w-64 h-12 ms-16'/>
                                    
                                    <h4 className="text-gray-800 font-bold mt-5">{item.title}</h4>
                                </div>
                            </div>
                            <div className="py-2 px-4 border-t text-right shadow-inner shadow-gray-700">
                                <a href={item.href} className="text-[#358FFF] hover:text-black text-sm font-medium">
                                    View
                                </a>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
)