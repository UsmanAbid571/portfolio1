'use client'
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
       <div className='lg:mt-0'>
            <ScrollVelocity  texts={['WEB DEVELOPER']} 
        className="custom-scroll-text text-4xl md:text-5xl lg:text-6xl"/>
        </div>

        <div id="about"><About/></div>
        <div id="skills"><Skills/></div>
        <div id="services"><Services/></div>
        <div id="projects"><Projects/></div>
        <div id="contact"><Contact/></div>
        
        
        
        
        
      </div>
  );
}
