'use client'
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
      duration: '2021 - 2022'
    },
    
  ]
}

const Resume = () => {
  return <div>Resume page</div>
}

export default Resume
