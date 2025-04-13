import React from 'react';
import { motion } from 'framer-motion';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img5 from '../assets/portfolio-img5.png';
import { fadeIn } from '../variants';

const Work = () => {
  return (
    <section className='section' id='Work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
            {/* text */}
            <div >
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work
              </h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                corporis consequatur libero, expedita eveniet itaque asperiores inventore? Cupiditate,
                ipsum aliquid?</p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* Image with hover-only link */}
              <div className="relative">
                <img 
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img1}
                  alt="Project 1" 
                />
                {/* Invisible clickable overlay that only appears on hover */}
                <a 
                  href="https://samad302.github.io/A-shop/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-50 opacity-0 group-hover:opacity-100 cursor-pointer"
                  aria-label="View Project 1"
                ></a>
              </div>

              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>A-Shop </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-16'>
            {/* image 2 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* Image with hover-only link */}
              <div className="relative">
                <img 
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img2}
                  alt="Project 2" 
                />
                {/* Invisible clickable overlay that only appears on hover */}
                <a 
                  href="https://get-me-a-chai-phi.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-50 opacity-0 group-hover:opacity-100 cursor-pointer"
                  aria-label="View Project 2"
                ></a>
              </div>

              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Next.js/Mongodb/Stripe</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Get me a chai</span>
              </div>
            </div>

            {/* image 3  */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* Image with hover-only link */}
              <div className="relative">
                <img 
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img5}
                  alt="Samm-Fitness Project" 
                />
                {/* Invisible clickable overlay that only appears on hover */}
                <a 
                  href="https://samm-fitness.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-50 opacity-0 group-hover:opacity-100 cursor-pointer"
                  aria-label="View Samm-Fitness project"
                ></a>
              </div>

              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>HTML/CSS/JS</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Samm-Fitness</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;