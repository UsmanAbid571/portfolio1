'use client'
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className="">
      <Hero/>
       <div className='lg:mt-0'>
            <ScrollVelocity  texts={['WEB DEVELOPER']} 
        className="custom-scroll-text text-4xl md:text-5xl lg:text-6xl"/>
        </div>

        <div id="about"><About/></div>
        <div><Skills/></div>
        <div><Projects/></div>
        
        
        
      </div>
  );
}
