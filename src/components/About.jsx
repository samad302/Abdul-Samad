import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <section className='section py-12 md:py-20' id='About' ref={ref}> {/* Changed back to id="About" */}
      <div className="container mx-auto px-4">
        <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12'>
          {/* Image Section */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.1 }}
            className='w-full lg:w-1/2 aspect-square md:aspect-[4/5] lg:aspect-square 
                      bg-about bg-cover bg-center rounded-lg shadow-lg mx-auto max-w-md'
          ></motion.div>

          {/* Text Content */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.1 }}
            className='w-full lg:w-1/2'
          >
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>I'm a Freelancer Full Stack Developer with over 3 years of experience.</h3>
            <p className='mb-6'>
              I'm a Full Stack Web Developer. I specialize in building high-performance, SEO-optimized web applications.
            </p>

            <div className='grid grid-cols-3 gap-4 mb-8 md:mb-12'>
              <div className='text-center'>
                <div className='text-2xl md:text-3xl lg:text-4xl font-tertiary text-gradient mb-2'> 
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className='font-primary text-xs md:text-sm tracking-[2px]'>
                  Years of Experience
                </div>
              </div>

              <div className='text-center'>
                <div className='text-2xl md:text-3xl lg:text-4xl font-tertiary text-gradient mb-2'> 
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-xs md:text-sm tracking-[2px]'>
                  Projects Completed
                </div>
              </div>

              <div className='text-center'>
                <div className='text-2xl md:text-3xl lg:text-4xl font-tertiary text-gradient mb-2'> 
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-xs md:text-sm tracking-[2px]'>
                  Satisfied Clients
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='btn btn-lg flex-1'>Contact Me</button>
              <a href="#" className='btn btn-outline flex-1 text-center'>
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