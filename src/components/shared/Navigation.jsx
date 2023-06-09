import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../style.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const user = localStorage.getItem('email');
  const logout = () => {
    localStorage.removeItem('email')
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" p-8">
      <nav >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to='/'><img src={logo} alt='The logo' className='logo' /></Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <ul className="ml-4 flex space-x-4">
                  <li>
                    <Link to="/" className=" text-xl font-medium text-white">Home</Link>
                    
                  </li>
                  <li>
                    <Link to="/register" className=" text-xl font-medium  text-white">Join</Link>
                   
                  </li>




                  <li>
                    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                      {
                        user && (<img className=' text-xl profile-image border-2 border-gray-700 rounded-full ' src={logo} alt='the logo' />)
                      }


                      {isHovered && (
                        <div className="absolute bg-slate-800 mt-2 py-2 w-48 rounded-md shadow-2xl">
                          <Link
                           to='/profile'
                            className={`block px-4 py-2 ${selectedItem === 'Option 1' ? 'bg-slate-800' : 'hover:bg-slate-700'}`}
                            onClick={() => handleItemClick('Option 1')}
                          >
                            Profile
                          </Link>
                          <li>
                      <Link to="/add-post"  className={`block px-4 py-2 ${selectedItem === 'Option 1' ? 'bg-slate-800' : 'hover:bg-slate-700'}`}>Create Post</Link>

                    </li>
                          <Link
                            to="#"
                            className={`block px-4 py-2 ${selectedItem === 'Option 2' ? 'bg-slate-800' : 'hover:bg-slate-700'}`}
                            onClick={logout}
                          >
                            Logout
                          </Link>

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
            <ul className="px-2  pb-10 space-y-1 sm:px-3">
              <li>
                <Link to="/" className=" text-xl font-medium text-white">Home</Link>

              </li>
              <li>
                <Link to="/register" className=" text-xl font-medium  text-white">Join</Link>

              </li>
              {
                user && (
                  <>
                    <li>
                      <Link to="/profile" className=" text-xl font-medium  text-white">Profile</Link>

                    </li>
                    <li>
                      <Link to="/add-post" className=" text-xl font-medium  text-white">Create Post</Link>

                    </li>
                    <li>
                      <Link to="/*" className=" text-xl font-medium  text-white " onClick={logout}>Logout</Link>

                    </li>
                  </>
                )
              }
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
