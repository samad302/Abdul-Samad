import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img5 from '../assets/portfolio-img5.png';
import { fadeIn } from '../variants';

const Work = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const cardWidth = 350; // Width of each project card
  const gap = 16; // Gap between cards (mx-4 = 16px)
  const [maxScroll, setMaxScroll] = useState(0);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  // Projects data
  const allProjects = [
    {
      id: 1,
      img: Img1,
      link: "https://samad302.github.io/A-shop/",
      type: "UI/UX Design",
      title: "A-Shop"
    },
    {
      id: 2,
      img: Img2,
      link: "https://get-me-a-chai-phi.vercel.app",
      type: "Next.js/Mongodb/Stripe",
      title: "Get me a chai"
    },
    {
      id: 3,
      img: Img5,
      link: "https://samm-fitness.vercel.app/",
      type: "HTML/CSS/JS",
      title: "Samm-Fitness"
    },

    {
      id: 4,
      img: Img5,
      link: "https://samm-fitness.vercel.app/",
      type: "HTML/CSS/JS",
      title: "Samm-Fitness"
    },

    {
      id: 5,
      img: Img5,
      link: "https://samm-fitness.vercel.app/",
      type: "HTML/CSS/JS",
      title: "Samm-Fitness"
    },
    // Add more projects as needed
  ];

  // Duplicate projects for seamless looping
  const marqueeProjects = [...allProjects, ...allProjects];
  const totalWidth = (cardWidth + gap * 2) * marqueeProjects.length;

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setMaxScroll(containerWidth - totalWidth);
      updateButtonVisibility();
    }
  }, [totalWidth]);

  const updateButtonVisibility = () => {
    const currentX = x.get();
    setShowLeftBtn(currentX < -10);
    setShowRightBtn(currentX > maxScroll + 10);
  };

  const scrollTo = (targetX) => {
    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      onUpdate: updateButtonVisibility
    });
  };

  const scrollLeft = () => {
    const newX = Math.min(x.get() + (cardWidth + gap * 2), 0);
    scrollTo(newX);
  };

  const scrollRight = () => {
    const newX = Math.max(x.get() - (cardWidth + gap * 2), maxScroll);
    scrollTo(newX);
  };

  const handleDragEnd = () => {
    updateButtonVisibility();
  };

  return (
    <section className='section' id='Work'>
      <div className='container mx-auto px-4 relative'>
        {/* Text Content at Top */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='text-center mb-16'
        >
          <h2 className='h2 leading-tight text-accent mb-4'>
            My Latest Work
          </h2>
          <p className='max-w-2xl mx-auto mb-8'>
            Use buttons or drag to scroll through projects
          </p>
          <button className='btn btn-sm'>View all projects</button>
        </motion.div>

        {/* Marquee Container */}
        <div 
          ref={containerRef}
          className='relative w-full overflow-hidden h-[300px]'
        >
          {/* Scroll Buttons */}
          {showLeftBtn && (
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center ml-2 transition-all"
              aria-label="Scroll left"
            >
              &larr;
            </button>
          )}
          
          {showRightBtn && (
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2 transition-all"
              aria-label="Scroll right"
            >
              &rarr;
            </button>
          )}

          <motion.div 
            ref={marqueeRef}
            className='flex whitespace-nowrap'
            drag="x"
            dragConstraints={{ left: maxScroll, right: 0 }}
            dragElastic={0.1}
            style={{ x }}
            onDragEnd={handleDragEnd}
          >
            {marqueeProjects.map((project, index) => (
              <div 
                key={`${project.id}-${index}`} 
                className='group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 w-[350px] h-[250px] flex-shrink-0 select-none'
              >
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img 
                  className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover pointer-events-none'
                  src={project.img}
                  alt={`Project ${project.title}`} 
                  draggable="false"
                />
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-50"
                  aria-label={`View ${project.title}`}
                />
                <div className='absolute -bottom-full left-6 group-hover:bottom-16 transition-all duration-500 z-50'>
                  <span className='text-gradient'>{project.type}</span>
                </div>
                <div className='absolute -bottom-full left-6 group-hover:bottom-8 transition-all duration-700 z-50'>
                  <span className='text-2xl text-white'>{project.title}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;