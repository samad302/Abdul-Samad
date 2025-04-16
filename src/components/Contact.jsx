import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='section bg-black/80 text-white py-16' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'
          >
            <div>
              <p className='text-7xl leading-tight text-accent'>Get In Touch</p>
              <h2 className='max-w-sm mb-6 text-gray-300'>Feel free to reach out for any inquiries or collaborations.</h2>
              
              {/* Added Contact Info */}
              <div className='mt-8 space-y-4'>
                <div className='flex items-center gap-4'>
                  <span className='text-accent text-xl'>📧</span>
                  <a href="mailto:sammadjawaid465@gmail.com" className='text-gray-300 hover:text-accent transition-colors'>
                  sammadjawaid465@gmail.com
                  </a>
                </div>
                <div className='flex items-center gap-4'>
                  <span className='text-accent text-xl'>📱</span>
                  <a href="tel:+923052237725" className='text-gray-300 hover:text-accent transition-colors'>
                    +92 3052237725
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-16'
          >
            <form className='p-6 rounded-2xl shadow-lg border border-white/50 bg-black/60'>
              <div className='mb-4'>
                <label className='block text-sm font-semibold text-gray-200'>Name</label>
                <input type='text' className='w-full p-3 border border-gray-500 rounded-lg bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-accent' placeholder='Your Name' />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-semibold text-gray-200'>Email</label>
                <input type='email' className='w-full p-3 border border-gray-500 rounded-lg bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-accent' placeholder='Your Email' />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-semibold text-gray-200'>Message</label>
                <textarea className='w-full p-3 border border-gray-500 rounded-lg bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-accent' rows='4' placeholder='Your Message'></textarea>
              </div>
              <button className='btn btn-sm'>Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;