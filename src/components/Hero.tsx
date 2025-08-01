'use client'
import SplitText from '@/blocks/TextAnimations/SplitText/SplitText'
import React from 'react'
import Navbar from './Navbar'
import TextType from '@/blocks/TextAnimations/TextType/TextType'


const Hero = () => {
  return (

    <div className='flex flex-col gap-4 items-center h-[50vh] lg:h-screen overflow-hidden p-4 '>
        <Navbar/>
      <SplitText text="Hi, I'm Usman" className='text-5xl lg:text-6xl font-extrabold mt-[20vh]' />
      <TextType  text={["Frontend developer", "Mern stack developer", "Creating Web Solutions","Full Stack developer"]}
        className='text-xl font-semibold'
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"/>  
    </div>
  )
}

export default Hero
