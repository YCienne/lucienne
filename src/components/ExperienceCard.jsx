import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{ background: '#1f1f2e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <h3 className="text-white text-xl font-bold">{experience.title}</h3>
    <p className="text-secondary text-sm font-semibold" style={{ margin: 0 }}>
      {experience.company_name}
    </p>
    <ul className="mt-5 list-disc ml-5 space-y-2 text-gray-300 text-sm">
      {experience.points.map((point, index) => (
        <li key={`exp-point-${index}`}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export default ExperienceCard;