import FadeContent from '@/blocks/Animations/FadeContent/FadeContent'
import SpotlightCard from '@/blocks/Components/SpotlightCard/SpotlightCard'
import ScrollFloat from '@/blocks/TextAnimations/ScrollFloat/ScrollFloat'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams'

const skills = [
    'NextJS',
    'React',
    'Tailwind',
    'MongoDB',
    'NodeJS',
    'ExpressJS'
]
const Skills = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-7xl text-center font-sans font-bold">
         <ScrollFloat
                         animationDuration={1}
                         ease='back.inOut(2)'
                         scrollStart='center bottom+=50%'
                         scrollEnd='bottom bottom-=40%'
                         stagger={0.03}
                         > Skills </ScrollFloat>
        </h1>
        <p className="max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          <FadeContent
                blur={true} duration={1000} easing="ease-out" initialOpacity={0}
                >
                <div className='flex flex-wrap justify-center items-center gap-4 mt-8'>
                    {
                        skills.map((skill, index) => (
                            <SpotlightCard key={index} className="custom-spotlight-card w-[150px] text-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <h1>{skill}</h1>
                        </SpotlightCard>
                        ))
                    }
                </div>
                </FadeContent>
        </p>
       
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Skills
