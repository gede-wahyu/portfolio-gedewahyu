import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img4.jpg';
import Img2 from '../assets/portfolio-img5.png';
import Img3 from '../assets/portfolio-img6.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 mb-2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-6'>
                Can't wait for the next project!
              </p>
              {/* <button className='btn btn-sm'>View all projects</button> */}
              {/* KALAU OPEN BUTTON DIATAS JANGAN LUPA TAMBAHIN MB DI <P> DIATAS JADI MB-16 */}
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all duration-500 z-50'>
                <div className='flex'>
                  <span className='text-gradient'>
                    Writting
                  </span>
                </div>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a className='text-3xl text-white' href="https://ojs.uajy.ac.id/index.php/giat/article/view/5945" target='_SEJ' rel='noreferrer'>Community Service: Training and Making Learning Animated Video</a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  Web Developing
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a href='https://tokobuku0752.000webhostapp.com/' target='_SEJ' rel='noreferrer' className='text-3xl text-white'>Book Shop</a>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  Web Developing
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a href='https://siabrm.000webhostapp.com/home' target='_SEJ' rel='noreferrer' className='text-3xl text-white'>SIABRM: Motorcyle Rental</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
