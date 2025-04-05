import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, Inview] = useInView({
    threshold: 0.5,
  });
  
  return (
    <section className='section' id='About' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Image Section - Fixed */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 bg-about bg-no-repeat bg-center 
                      w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]
                      bg-contain sm:bg-cover
                      mx-auto'
          ></motion.div>

          {/* Text Content - Your Original Content */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>I'm a Freelancer Full Stack Developer with over 3 years of experience.</h3>
            <p className='mb-6'>
            I'm a Full Stack Web Developer . I specialize in building high-performance, SEO-optimized web applications with responsive front-end designs and scalable back-end architecture. From interactive 
            user interfaces to fast-loading, mobile-friendly websites, I deliver solutions that boost visibility and drive results.
            </p>

            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'> 
                  {Inview ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Year of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'> 
                  {Inview ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'> 
                  {Inview ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Experience
                </div>
              </div>
            </div>

            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>
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