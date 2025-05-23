import React from 'react';
// import icons

import{ BiHomeAlt, BiUser} from 'react-icons/bi';
import{ BsClipboard2DataFill,  BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return ( <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      {/* nav inner */}
      <div className='w-full bg-black/20 h-[96px]
       backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between 
       items-center text-2xl
      '>
      <Link to='Home'
      activeClass='active'
      smooth={true}
      spy={true} 
      // ya apni taraf sa maan 250 kia ha if any problem i remove ths 
      offset={-250}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiHomeAlt />

      </Link>
      <Link to='About'
      activeClass='active'
      smooth={true}
      spy={true} 
      offset={50}

       className='cursor-pointer w-[60] h-[60px] flex items-center justify-center'>
      <BiUser />

      </Link  >
      <Link to='services'
      activeClass='active'
      smooth={true}
      spy={true} 
      offset={50}

       className='cursor-pointer w-[60] h-[60px] flex items-center justify-center'>
      <BsClipboard2DataFill />

      </Link>
      <Link to='Work'
      activeClass='active'
      smooth={true}
      spy={true} 
      offset={50}

       className='cursor-pointer w-[70] h-[60px] flex items-center justify-center'>
      <BsBriefcase />

      </Link>
      <Link to='contact'
      activeClass='active'
      smooth={true}
      spy={true} 
      offset={0}
       className='cursor-pointer w-[60] flex items-center justify-center'>
      <BsChatSquareText />

      </Link>

      </div>
    </div>
  </nav>
  );
};

export default Nav;
