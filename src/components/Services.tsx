import FadeContent from '@/blocks/Animations/FadeContent/FadeContent'
import ScrollFloat from '@/blocks/TextAnimations/ScrollFloat/ScrollFloat'
import React from 'react'
import ShinyText from '@/blocks/TextAnimations/ShinyText/ShinyText'
import Link from 'next/link'
import SpotlightCard from '@/blocks/Components/SpotlightCard/SpotlightCard'
import { Button } from './ui/button'


const skills = [
    'Web Development',
    'API Development and Integration',
    
]
const Services = () => {
  return (
    <div className='h-[40rem] flex justify-center items-center'>
      <FadeContent> 
    
        <div className="md:w-[50vw] flex flex-col justify-center items-center ">
          <div className="text-4xl mb-6 font-bold font-sans md:text-7xl md:mb-6 ">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              > Services</ScrollFloat>
          
          </div>
          <div>
            <FadeContent>
                        <div>
                          <div className='flex flex-wrap justify-center items-center gap-4 mt-8'>
                    {
                        skills.map((skill, index) => (
                            <SpotlightCard key={index} className="flex items-center justify-center custom-spotlight-card text-center h-[100px]" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <h1>{skill}</h1>
                        </SpotlightCard>
                        ))
                    }
                </div>
                        </div>
            </FadeContent>
          </div>
       <div className='mt-8'>
        <Link href="/services">
        <Button variant="outline">
        <ShinyText text="Reach Out Now" disabled={false} speed={3} className='custom-class '/>
        </Button>
        </Link>
       </div>
        </div>
       
        </FadeContent>
    </div>
  )
}

export default Services
