"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import ScrollFloat from "@/blocks/TextAnimations/ScrollFloat/ScrollFloat";


const content = [
  {
    title: "AnonySend",
    description:
      "Anony Send is an anonymous messaging website where you can send and receive messages anonymously.",
    techStack: ["React", "Next.js", "Tailwind CSS", "MongoDB", "ShadCN UI", 'Resend'],
    liveLink: "https://anony-send.vercel.app/",
    githubRepo: "https://github.com/UsmanAbid571/anony-send",
    content: (
      <div className="flex h-full w-full items-center justify-center ">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Byte Bursts",
    description:
      "Byte Bursts is a blog page where you can read different tyoe of articles",
    techStack: ["React", "Next.js", "Tailwind CSS", "MongoDB", "Node.js",'Sanity Headless CMS'],
    liveLink: "https://bytebursts.netlify.app/",
    githubRepo: "https://github.com/UsmanAbid571/ByteBursts",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "NoteHarbour",
    description:
      "NoteHArbour is a note taking website where you can create and manage your notes. You can access your notes anywhere, anytime.",
    techStack: ["React", "Next.js", "Tailwind CSS", "MongoDB", "Node.js",'Daisy UI'],
    liveLink: "https://noteharbour.vercel.app/",
    githubRepo: "https://github.com/UsmanAbid571/noteharbour",
    content: (
      <div className="flex h-full w-full items-center justify-center ">
         <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   techStack: ["React", "Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
  //   content: (
  //     <div className="flex h-full w-full items-center justify-center ">
  //       <Image
  //         src="/linear.webp"
  //         width={300}
  //         height={300}
  //         className="h-full w-full object-cover"
  //         alt="linear board demo"
  //       />
  //     </div>
  //   ),
  // },
];
export default function Projects() {
  return (
    <div className="w-full">
      <span className="relative z-10 text-4xl md:text-7xl text-center font-sans font-bold">
        <ScrollFloat
        animationDuration={1}
       ease='back.inOut(2)'
       scrollStart='center bottom+=50%'
       scrollEnd='bottom bottom-=40%'
       stagger={0.03}
       textClassName="">
         Projects </ScrollFloat>

      </span>
       
      <StickyScroll content={content} />
    </div>
  );
}
