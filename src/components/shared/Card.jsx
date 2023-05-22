import React from 'react';
import logo from '../../images/logo.png';
import '../../style.css';

const Card = () => {
  return (
    <div className="	 rounded-lg shadow-md overflow-hidden max-w-sm mx-auto animate-rotate pb-16 my-6 ">
      <img src={logo} alt="Card" className="w-full h-5/6 object-cover card bg-white rounded-lg" />
      <img src={logo} alt='the author' className="-mt-16 ml-8  w-1/6 rounded-full" />
      <div className="px-4  mt-8">
        <div className='flex'>
        <p className='bg-gray-800 text-white w-4/12 rounded-2xl text-center py-1 text-bold mb-2'>Design</p>
        <p className='bg-gray-800 text-white w-4/12 rounded-2xl text-center py-1 text-bold mb-2 mx-1'>Technology</p>
        <p className='bg-gray-800 text-white w-4/12 rounded-2xl text-center py-1 text-bold mb-2'>Product</p>
        </div>
        <h3 className="text-xl text-white  font-bold mb-2"> Title</h3>
        <h3 className="text-white font-normal text-xl ">Short Description</h3>
       
      </div>
    </div>
  );
};

export default Card;
