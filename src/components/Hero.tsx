'use client'
import SplitText from '@/blocks/TextAnimations/SplitText/SplitText'
import React from 'react'
import TextType from '@/blocks/TextAnimations/TextType/TextType'
import { Spotlight } from './ui/spotlight-new'


const Hero = () => {
  return (

    <div className="h-[40rem] w-full rounded-md flex items-center justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
         <Spotlight />
         <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
           <h1 className="text-4xl md:text-7xl font-extrabold text-center ">
              <SplitText text="Hi, I'm Usman"  />
           </h1>
           <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
             <TextType  text={["Frontend developer", "Mern stack developer", "Creating Web Solutions","Full Stack developer"]}
           typingSpeed={75}
           pauseDuration={1500}
           showCursor={true}
           cursorCharacter="_"/>  
       
           </p>
         </div>
       </div>
  )
}

export default Hero
