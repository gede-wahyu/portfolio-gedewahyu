import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          >
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I Gede Wahyu Sedana
            </h3>
            <p className='mb-6'>
              I'm final year student of <span className='underline'>information system</span> major. Interested in the <span className='underline'>system analysis</span> and <span className='underline'>risk analysis</span> field. Familiar with finding <span className='underline'>user/system requirements</span> and doing <span className='underline'>business process modeling</span>.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-16 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={3.94} duration={3} decimals={2} separator=' ' decimal=',' /> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Current <br />
                  GPA
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={5} duration={3} /> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              {/* <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={12} duration={3} /> : null
                  } k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div> */}
            </div>
            <div className='flex gap-x-8 items-center'>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
