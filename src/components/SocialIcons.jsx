import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const icons = [
  {
    href:"#",
    components: <FaLinkedin/>
  }, 
  {
    href:"#",
    components: <FaGithub/>
  },
  {
    href:"#",
    components: <FaTwitter/>
  }
]
const SocialIcons = () => {
  return (
    <div className='flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6'>
      {icons.map((icon, index)=>(
        <a href={icon.href} className='w-10 h-10 flex items-center justify-center border-2 border-green-600 rounded-full text-green-600 hover:bg-green-600 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(128,0,128,0.8)]'>{icon.components}</a>
      ))}
    </div>
  )
};

export default SocialIcons;