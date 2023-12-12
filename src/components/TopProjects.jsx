import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { topProjects } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { github, browser } from '../assets';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={project.complete_duration}
      iconStyle={{ background: project.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={project.icon}
            alt={project.sub_title}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{project.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {project.sub_title}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {project.features.map((point, index) => (
          <li
            key={`feature-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      <div className='mt-4 flex flex-wrap gap-2'>
        {project.technologies.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
      <div className='flex justify-start items-center gap-4 mt-4'>
        <Link to={project.live_link}>
          <button className='px-3 py-1 rounded-md bg-green-text-gradient flex justify-center items-center gap-3'>
            <img
              src={browser}
              className='w-[22px]'
              alt='source code'
            />
            Live Link
          </button>
        </Link>
        <Link to={project.client_link}>
          <button className='px-3 py-1 rounded-md bg-blue-text-gradient flex justify-center items-center gap-3'>
            <img
              src={github}
              className='w-[22px]'
              alt='source code'
            />
            Client
          </button>
        </Link>
        <Link to={project.client_link}>
          <button className='px-3 py-1 rounded-md bg-orange-text-gradient flex justify-center items-center gap-3'>
            <img
              src={github}
              className='w-[22px]'
              alt='source code'
            />
            Server
          </button>
        </Link>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Top Projects
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {topProjects.map((project, index) => (
            <ExperienceCard
              key={`project-${index}`}
              project={project}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
