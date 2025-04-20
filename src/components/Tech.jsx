import React from 'react'
import  { technologies } from '../constants'
import BallCanvas from './canvas/Ball'

const Tech = () => {
  return (
    
    <div id='tech' className='flex flex-row flex-wrap justify-center gap-10'>
      <h2 className="text-4xl md:text-5xl font-bold text-white mt-12">Tech Stack</h2>

      <div id='tech' className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
            
          </div>
      
    </div>
  )
}

export default Tech

