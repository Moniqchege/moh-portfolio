'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

const about = {
  title: 'About me',
  description: 'I am a passionate Next.js and React developer with a knack for building fast, scalable, and user-friendly web applications.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Monicah Chege'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+254) 742664295'
    },
    {
      fieldName: 'Skype',
      fieldValue: 'Quichege'
    },
    {
      fieldName: 'Experience',
      fieldValue: '2+ Years'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Kenyan'
    },
    {
      fieldName: 'Email',
      fieldValue: 'monicahwangui28@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Swahili'
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'With 2 years of experience in Next.js and React development, I have honed my skills in creating robust and efficient web applications.',
  items: [
    {
      company: 'TecHive',
      position: 'Junior Front-End Developer',
      duration: '2023 - Present'
    },
    {
      company: 'TecHive',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2023'
    },
    {
      company: 'Graph Technologies',
      position: 'Freelance Web Developer',
      duration: '2022-2023'
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'I have enhanced my skills through comprehensive courses at freeCodeCamp, ALX, and Codecademy, gaining a strong foundation in web development and programming.',
  items: [
    {
      institution: 'Online CoursePlatform',
      degree: 'Front-End Developement Bootcamp',
      duration: '2023'
    },
    {
      institution: 'Codecademy',
      degree: 'Front-End Track',
      duration: '2022'
    },
    {
      institution: 'ALX Online Course',
      degree: 'Software Engineering',
      duration: '2021 - 2022'
    },
    {
      institution: 'Chuka University',
      degree: 'Associate Degree in Computer Science',
      duration: '2015 - 2019'
    },

  ]
}

const skills = {
  title: 'My skills',
  description: 'Skilled in developing modern web applications with a focus on performance, scalability, and user experience. Experienced in front-end and back-end development, utilizing a variety of frameworks and tools.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {experience.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid gri-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full'>
                            </span>
                            <p className='text-white/60'>
                              {item.company}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {education.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid gri-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full'>
                            </span>
                            <p className='text-white/60'>
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {skills.title}
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-5xl group-hover:text-accent transition-all duration-300'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>
                              {skill.name}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>
                  {about.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>
                          {item.fieldName}
                        </span>
                        <span className='text-xl'>
                          {item.fieldValue}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
