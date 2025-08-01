"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import TextType from "@/blocks/TextAnimations/TextType/TextType";

export function SpotlightNewDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
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
  );
}
