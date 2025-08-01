'use client'
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import Hero from "@/components/Hero";




export default function Home() {
  return (
    <div>
      <Hero/>
       <div className='lg:mt-0'>
            <ScrollVelocity  texts={['WEB DEVELOPER']} 
        className="custom-scroll-text text-4xl md:text-5xl lg:text-6xl"/>
        </div>
      </div>
  );
}
