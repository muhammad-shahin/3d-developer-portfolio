import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { socialLinks } from '../constants';
import { Link } from 'react-router-dom';

const SocialCard = ({ index, message, name, note, image, link }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full shadow-lg shadow-purple-900'
  >
    <Link
      to={link}
      target='_blank'
      className='relative z-[100] w-full'
    >
      <button className='px-3 py-2 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-indigo-600 hover:to-indigo-600 duration-300 flex justify-center items-center gap-3 mt-4  w-full my-6 text-[14px]'>
        {note}
        <img
          src={image}
          className='w-[22px] rounded-full'
          alt='source code'
        />
      </button>
    </Link>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px] h-[130px]'>
        {message}
      </p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>let'
          s get social</p>
          <h2 className={styles.sectionHeadText}>Connect With Me.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {socialLinks.map((testimonial, index) => (
          <SocialCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
