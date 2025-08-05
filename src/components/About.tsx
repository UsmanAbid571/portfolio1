
import ScrollFloat from '@/blocks/TextAnimations/ScrollFloat/ScrollFloat'
import React from 'react'
import { cn } from "@/lib/utils";
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';

const text= "Hi! I'm a passionate MERN Stack Developer with a strong focus on building modern, scalable, and responsive web applications. With hands-on experience in MongoDB, Express.js, React, and Node.js, I bring both frontend fineness and backend logic together to deliver seamless user experiences.I love turning ideas into interactive digital products. Whether it's developing robust REST APIs, integrating third-party services, or crafting pixel-perfect interfaces with React, I enjoy every part of the development lifecycle.Let's build something awesome together!"
const About = () => {
  return (
   <div className="relative flex flex-col h-screen w-full items-center justify-center bg-white dark:bg-black">
         <div
           className={cn(
             "absolute inset-0",
             "[background-size:20px_20px]",
             "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
             "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
           )}
         />
         {/* Radial gradient for the container to give a faded look */}
         <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
         <div className="relative text-4xl font-bold font-sans md:text-7xl">
           <ScrollFloat
                           animationDuration={1}
                           ease='back.inOut(2)'
                           scrollStart='center bottom+=50%'
                           scrollEnd='bottom bottom-=40%'
                           stagger={0.03}
                           > About</ScrollFloat>
         </div>
         <div className="w-[70%] md:w-[50vw] mt-4 text-sm  text-slate-300"> 
          <BlurText
  text={text}
  delay={30}
  animateBy="words"
  direction="top"
  className=""
/></div>
       </div>
  )
}

export default About
