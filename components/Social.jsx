import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaTwitter, FaDiscord } from "react-icons/fa"

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Moniqchege" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/monicah-chege-software-engineer" },
  { icon: <FaTwitter />, path: "https://x.com/home" },
  { icon: <FaDiscord />, path: "https://discord.com/channels/@me" },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
           key={index}
           href={item.path}
           className={iconStyles}
          >
           {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
