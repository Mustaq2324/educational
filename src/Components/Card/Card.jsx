export default () => {

  const features = [
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>,
      title: " Flexibility to Schedule Sessions",
      desc: "24*6 availability. Choose Anytime, Any day!  "
    },
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>,
      title: "Qualified Tutors",
      desc: "Education through personalized guidance and experience"
    },
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>,
      title: " Cutting-Edge Technology",
      desc: "Highly User Friendly & Intuitive White Board with Media Sharing!"
    },
  ];

  return (
    <section className="py-20 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 pb-10  text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-[#25283A] sm:text-6xl xl:text-5xl  text-center font-montserrat
">
        <span className='text-[#4C9BFB]'>Why  </span> Choose Us
              </h1>
         
          {/* <p className="mt-3 text-gray-600 text-center" >
            Links provides assistance to each student to achieve desired career goals. We design Links to help individuals acquire skills and knowledge needed to tackle even the most challenging projects.
          </p> */}
        </div>
        <div className="pt-20 text-center">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className={`space-y-3 p-4 ${idx === 0 ? 'shadow-inner shadow-[#48CA80]' : idx === 1 ? 'shadow-inner shadow-[#FF8464]' : ' shadow-inner shadow-[#FFBA52]'} text-[#25283A] font-semibold transition-colors duration-300 ease-in-out`}>
                <div className={`w-12 h-12 mx-auto ${idx === 0 ? 'bg-[#48CA80]' : idx === 1 ? 'bg-[#FF8464]' : 'bg-[#FECC49]'} text-white rounded-full flex items-center justify-center`}>
                  {item.icon}
                </div>
                <p className="text-base font-bold ">{item.title}</p>
                <p className="text-gray-600 text-[15px]">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
