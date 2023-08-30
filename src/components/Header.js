import React from 'react';

import Logo from '../assets/logo3.svg';

import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="">
            <img className='w-[30%] h-[30%]' src={Logo} alt="" />
          </a>
          {/* button */}
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
          >
            <button className='btn btn-sm'>Hire me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
