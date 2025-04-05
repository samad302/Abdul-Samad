import React from 'react';
// images
import Logo from '../assets/logo.png'

// iss section ma  pb mana add kia ha if 
// any problem i remove this or sath ma lg: bhe 

const Header = () => {
  return <header className=' lg:py-9 pb-28 '  > 
  <div className="container mx-auto">

    <div className='flex justify-between items-center'>
      {/* logo */}
      <a href="#">
        <img src={Logo} alt="" className='w-52'/>
      </a>
      <button className='btn btn-sm'> Work with me</button>
    </div>

  </div>
  </header>;
};

export default Header;
