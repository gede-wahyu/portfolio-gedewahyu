import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const images = Array.from({ length: 28 }, (_, i) => require(`../assets/skills/${i + 1}.png`));

// images.slice(0, 5).map((image, index) => (
//   console.log(image)
// ));

const services = [
  {
    name: 'Laboratory Teaching Assistant (Supervisor) of Basic Programming',
    description: 'Collaborating with the lecturer to oversee junior assistants and the classes and providing guidance to class participants.',
    link: 'Jan 2023 - Jun 2023',
  },
  {
    name: 'Laboratory Teaching Assistant of Object Oriented Programming',
    description: 'Collaborating with the lecturer and assistants to oversee the classes and providing guidance to class participants.',
    link: 'Jul 2022 - Jan 2023',
  },
  {
    name: 'Laboratory Teaching Assistant of Basic Programming',
    description: 'Collaborating with the lecturer and assistants to oversee the classes and providing guidance to class participants.',
    link: 'Jan 2022 - Jun 2022',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>my experience.</h2>
            <h3 className='h3 max-w-[455px]'>To be System / Risk  Analyst.</h3>
            {/* <button className='btn btn-sm'>See my work</button> */}
            <div className='hidden lg:inline'>
              <div className='flex'>
                {images.slice(0, 4).map((image, index) => (
                  <div key={index} className="hexagon hover:scale-[1.3]">
                    <img src={image} alt={index} />
                  </div>
                ))}
              </div>
              <div className='flex -translate-x-[43px] -translate-y-[8px]'>
                {images.slice(4, 9).map((image, index) => (
                  <div key={index} className="hexagon hover:scale-[1.3]">
                    <img src={image} alt={index} />
                  </div>
                ))}
              </div>
              <div className='flex -translate-x-[86px] -translate-y-[16px]'>
                {images.slice(9, 15).map((image, index) => (
                  <div key={index} className="hexagon hover:scale-[1.3]">
                    <img src={image} alt={index} />
                  </div>
                ))}
              </div>
              <div className='flex -translate-x-[43px] -translate-y-[24px]'>
                {images.slice(15, 20).map((image, index) => (
                  <div key={index} className="hexagon hover:scale-[1.3]">
                    <img src={image} alt={index} />
                  </div>
                ))}
              </div>
              <div className='flex -translate-x-[86px] -translate-y-[32px]'>
                {images.slice(20, 25).map((image, index) => (
                  <div key={index} className="hexagon hover:scale-[1.3]">
                    <img src={image} alt={index} />
                  </div>
                ))}
              </div>
              <div className='flex -translate-x-[43px] -translate-y-[40px] '>
                {images.slice(25, 28).map((image, index) => (
                  <div key={index} className="hexagon hover:scale-[1.3]">
                    <img src={image} alt={index} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 pt-6'
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[230px] mb-[38px] flex lg:h-[145px]' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      {/* <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a> */}
                      <p className='text-gradient text-sm'>{link}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
