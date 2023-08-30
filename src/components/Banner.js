import React from 'react';

import Image from '../assets/avatar.svg';

import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              GEDE <span>WAHYU</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-5 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase lead-[1] leading-none'
            >
              <span className='text-white mr-4'>I'd like to be a</span>
              <TypeAnimation
                sequence={[
                  'System Analyst',
                  2000,
                  'Risk Analyst',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              I'm studying information system at Atma Jaya Yogyakarta University. Concentrating in system/business analysis and risk management.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <Link
                to='contact'
                activeClass='active'
                smooth={true}
                spy={true}
              >
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <a className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a className='lg:z-[70]' href="https://www.linkedin.com/in/i-gede-wahyu-sedana" target='_SEJ' rel='noreferrer'>
                <FaLinkedin />
              </a>
              <a className='lg:z-[70]' href="https://www.instagram.com/gede.wahyu__/" target='_SEJ' rel='noreferrer'>
                <FaInstagram />
              </a>
              <a className='lg:z-[70]' href="https://github.com/gede-wahyu" target='_SEJ' rel='noreferrer'>
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            // viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img style={{ transform: 'scale(0.9)' }} src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
