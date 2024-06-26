'use client'
import { motion } from "framer-motion"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const projects = [
  {
    num: '01',
    category: 'Frontend Project',
    title: 'Horizon App',
    description: "Horizon App seamlessly connects and manages multiple bank accounts in one convenient platform",
    stack: [
      { name: 'Tailwindcss', icon: <SiTailwindcss /> },
      { name: 'Javascript', icon: <FaJs /> },
      { name: 'Next.js', icon: <SiNextdotjs /> }
    ],
    image: '/assets/work/horizon.png',
    live: 'https://next-banking-app.vercel.app/',
    github: 'https://github.com/Moniqchege/next-banking_app',
  },
  {
    num: '02',
    category: 'ui/ux design',
    title: 'Brainwave',
    description: "Explore the possibilities of AI Chatting with Brainwave using NextJS.",
    stack: [
      { name: 'Tailwindcss', icon: <SiTailwindcss /> },
      { name: 'Typescript', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> }
    ],
    image: '/assets/work/brainwave.png',
    live: 'https://brainwave-lilac-one.vercel.app/',
    github: 'https://github.com/Moniqchege/UI-UX_Brainwave',
  },
  {
    num: '03',
    category: 'Fullstack',
    title: 'Ecommerce Application',
    description: 'Welcome to your ultimate destination for seamless online shopping. Discover a vast selection of products across various categories, from fashion and electronics to home goods and more. Enjoy personalized recommendations, secure payment options, and fast shipping.',
    stack: [
      { name: 'Tailwindcss', icon: <SiTailwindcss /> },
      { name: 'Typescript', icon: <FaJs /> },
      { name: 'Next.js', icon: <SiNextdotjs /> }
    ],
    image: '/assets/work/ecommerce.png',
    live: 'https://payment-order-full-stack-ecommerce-hn9z.vercel.app/',
    github: 'https://github.com/Moniqchege/mern-ecommerce-app',
  },
  {
    num: '04',
    category: 'React Native',
    title: 'Aora App',
    description: 'Built with React Native for seamless user experiences, Animatable for captivating animations, and integrated with the dependable backend systems of Appwrite, this app showcases impressive design and functionality, enabling seamless sharing of AI videos within the community.',
    stack: [
      { name: 'Tailwindcss', icon: <SiTailwindcss /> },
      { name: 'Typescript', icon: <FaJs /> },
      { name: 'Next.js', icon: <SiNextdotjs /> }
    ],
    image: '/assets/work/aora.png',
    live: '',
    github: 'https://github.com/Moniqchege/aora',
  },
  {
    num: '05',
    category: 'ui/ux design',
    title: 'Iphone 15 Website',
    description: 'This is a clone of iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP and Three.js.',
    stack: [
      { name: 'Tailwindcss', icon: <SiTailwindcss /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> }
    ],
    image: '/assets/work/3D-IPhone.png',
    live: 'https://iphone-doc.vercel.app/',
    github: 'https://github.com/Moniqchege/iphone/tree/main',
  },
  {
    num: '06',
    category: 'FullStack',
    title: 'Podcastr Application',
    description: 'A cutting-edge AI SaaS platform that enables users to create, discover, and enjoy podcasts with advanced features like text-to-audio conversion with multi-voice AI, podcast thumbnail Image generation and seamless playback.',
    stack: [
      { name: 'Tailwindcss', icon: <SiTailwindcss /> },
      { name: 'Typescript', icon: <FaJs /> },
      { name: 'Next.js', icon: <SiNextdotjs /> }
    ],
    image: '/assets/work/podcastr.png',
    live: 'https://podcastr-23zf.vercel.app/',
    github: 'https://github.com/Moniqchege/podcastr',
  },
  
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-xl text-accent">
                    <div className='text-3xl'>{item.icon}</div>
                    <span className='text-xs text-white/60'>{item.name}</span>
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt='' />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
