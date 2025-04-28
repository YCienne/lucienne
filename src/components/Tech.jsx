import React from 'react';
import { technologies } from '../constants';
import BallCanvas from './canvas/Ball';

const Tech = () => {
  return (
    <section id="tech" className="relative overflow-hidden flex flex-col items-center py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
        Tech Stack
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
