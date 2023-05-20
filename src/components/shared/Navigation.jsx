import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { CiSearch } from 'react-icons/ci';
import '../../style.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <div className="p-5">
     <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} alt='The logo' className='logo'/>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="ml-4 flex space-x-4">
                <li>
                  <a href="/" className=" text-xl font-medium hover:text-red-900 text-white">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-white text-xl font-medium hover:text-red-900">About</a>
                </li>
                <li>
                  <a href="/contact" className="text-white text-xl font-medium hover:text-red-900">Contact</a>
                </li>
                <li className='bg-gray-800 px-5 py-1 rounded-lg '>
                  <p className=" text-xl font-medium hover:text-red-900 flex"><CiSearch  className='mt-1 text-white'/><input className='ml-5 w-20  outline-none bg-gray-800 text-white' placeholder='Search' />
                    </p>
                </li>
                
              </ul>
            </div>
            <div className="md:hidden ">
              <button onClick={toggleMenu} className="text-white font-medium  focus:outline-none">
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden ml-56  ">
          <ul className="px-2  pb-3 space-y-1 sm:px-3">
            <li>
              <a href="/" className="block text-white font-medium hover:text-red-900">Home</a>
            </li>
            <li>
              <a href="/about" className="block text-white font-medium hover:text-red-900">About</a>
            </li>
            <li>
              <a href="/contact" className="block text-white font-medium hover:text-red-900">Contact</a>
            </li>
            <li className=' bg-gray-800 py-1 rounded-lg w-24 '>
                  <p className=" text-xl font-medium hover:text-red-900 flex"><CiSearch  className='mt-1 ml-1 text-white'/><input className='ml-1 w-16  outline-none bg-gray-800' placeholder='Search' />
                    </p>
                </li>
          </ul>
        </div>
      )}
    </nav>
   </div>
  );
};

export default Navbar;
