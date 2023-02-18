import React, { useState } from 'react'
import Navbar from './Navbar'
const Home = () => {
  // const [showAnimation, setShowAnimation]= useState(true)
  return (
    <div className="main-page">
      <Navbar />
      <div className='w-full LMd:h-[91vh] flex LMd:flex-row flex-col items-center justify-center relative overflow-hidden z-50' id='home'>
        <img className='transition-all hover-scale  h-[80px] absolute Tab:left-[10%] left-[4%] top-[5%] Tab:top-[13%] ' src='https://cdn-icons-png.flaticon.com/128/4616/4616900.png' alt='laptop' />
        <img className='transition-all hover-scale h-[50px] absolute left-[54%] top-[82%] rotate-90 ' src='https://cdn-icons-png.flaticon.com/128/6062/6062386.png' alt='laptop' />
        <img className='transition-all hover-scale Tab:block hidden h-[50px] absolute left-[84%] top-[5%] ' src='https://cdn-icons-png.flaticon.com/128/1601/1601913.png' alt='laptop' />
        <img className='transition-all hover-scale h-[70px] absolute LMd:left-[4%] left-[79%] LMd:top-[78%] top-[68%] rotate-[319deg]' src='https://cdn-icons-png.flaticon.com/128/1061/1061209.png' alt='globe' />
        <img className='transition-all hover-scale h-[70px] absolute left-[43%] Tab:top-[48%] top-[55%]' src='https://cdn-icons-png.flaticon.com/128/9677/9677570.png' alt='triplecube' />

        <div className='flex items-center justify-center h-full LMd:pl-16 Tab:pl-10 LMd:w-1/2 w-full p-5 LMd:order-1 order-2 '>
          <div className='w-full '>
            <h4 className='m-0 text-[4.5rem] font-bold text-white -mb-[12px] cursor-default'>Hi,</h4>
            <h4 className='m-0 text-[4.5rem] font-bold text-white -mb-[12px] cursor-default'>I'm Akash</h4>
            <h4 className='m-0 text-[4.5rem] font-bold text-white -mb-[12px] cursor-default'>Software Engineer</h4>
            <h6 className='m-0 text-[#8d8d8d] font-normal text-[11px] mt-3 cursor-default tracking-[3px]'>Front End Developer / Designer / Freelancer</h6>
          </div>
        </div>
        <div className="LMd:w-1/2 w-full p-4 h-full flex items-center justify-center LMd:order-2 order-1  ">
          <div className="border-radius overflow-hidden MLg:w-[450px] MLg:h-[450px] h-[360px] w-[360px] flex items-center justify-center relative">
            <img src='https://res.cloudinary.com/dn83xtspp/image/upload/v1676704453/WhatsApp_Image_2023-02-18_at_12.25.07_jikvie.jpg' className='h-full w-full object-cover' alt="profilePicture" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
