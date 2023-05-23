import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { CiSearch } from 'react-icons/ci';
import {GiArchiveRegister} from 'react-icons/gi'
import { RiLoginCircleFill} from 'react-icons/ri'
import { ImHome3} from 'react-icons/im';
import '../../style.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsHovered(false); // Close the dropdown after selecting an item
  };

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
              <Link to='/'><img src={logo} alt='The logo' className='logo'/></Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="ml-4 flex space-x-4">
                <li>
                  <Link to="/" className=" text-xl font-medium text-white">Home</Link>
                  {/* <ImHome3 className='text-white text-3xl'/> */}
                </li>
               <li>
                  <Link to="/register" className=" text-xl font-medium  text-white">Join</Link>
                  {/* <ImHome3 className='text-white text-3xl'/> */}
                </li>
               
               
                
                {/* <li className='bg-gray-500 px-5 py-1 rounded-lg '>
                  <p className=" text-xl font-medium hover:text-red-900 flex"><CiSearch  className='mt-1 text-white'/><input className='ml-5 w-20  outline-none bg-gray-500 text-white' placeholder='Search' />
                    </p>
                </li> */}

                <li>
                <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Item that triggers the dropdown */}
      <button className="hover:bg-gray-200 px-4 py-2 rounded-md">Hover Me</button>

      {/* Dropdown content */}
      {isHovered && (
        <div className="absolute bg-white mt-2 py-2 w-48 rounded-md shadow-lg">
          <a
            href="#"
            className={`block px-4 py-2 ${selectedItem === 'Option 1' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            onClick={() => handleItemClick('Option 1')}
          >
            Option 1
          </a>
          <a
            href="#"
            className={`block px-4 py-2 ${selectedItem === 'Option 2' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            onClick={() => handleItemClick('Option 2')}
          >
            Option 2
          </a>
          <a
            href="#"
            className={`block px-4 py-2 ${selectedItem === 'Option 3' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            onClick={() => handleItemClick('Option 3')}
          >
            Option 3
          </a>
        </div>
      )}
    </div>
                </li>
                
              </ul>
            </div>
            <div className="md:hidden ">
              <button onClick={toggleMenu} className="text-white font-medium  focus:outline-none ml-52">
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
        <div className="md:hidden  ml-52 ">
          <ul className="px-2  pb-3 space-y-1 sm:px-3">
          <li>
                  <Link to="/" className=" text-xl font-medium text-white">Home</Link>
                  
                </li>
               <li>
                  <Link to="/register" className=" text-xl font-medium  text-white">Join</Link>
                  
                </li>
          </ul>
        </div>
      )}
    </nav>
   </div>
  );
};

export default Navbar;
