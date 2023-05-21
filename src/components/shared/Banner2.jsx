import React from 'react'
import logo from '../../images/logo.png';


const Banner2 = () => {
  return (
    <div className='lg:flex justify-between'>
      <div className="px-4  mt-8">
        <div className='flex'>
        <p className='bg-gray-800 text-white lg:w-4/12  lg:rounded-2xl rounded-xl p-4 text-center py-1 text-bold mb-2'>Design</p>
        <p className='bg-gray-800 text-white lg:w-4/12 lg:rounded-2xl p-4 rounded-xl text-center py-1 text-bold mb-2 mx-2'>Design</p>
        <p className='bg-gray-800 text-white lg:w-4/12 lg:rounded-2xl p-4  rounded-xl text-center py-1 text-bold mb-2'>Design</p>
        </div>
        <h3 className="lg:text-5xl text-2xl text-white  font-bold mt-16 mb-5">Card Title</h3>
        <h3 className="text-white font-normal text-xl my-8 ">Short Description</h3>
     
         <div className='flex'>
           <img src={logo}  className="  rounded-5xl author"/>
           <div className='mt-4 ml-5'>
           <h3 className="text-white font-normal  ">Author Name</h3>
           <h3 className="text-white font-normal  ">Time - 5 minutes read</h3>
           </div>
         </div>
      </div>
      <div>
        <img src={logo} alt='the logo' />
      </div>
    </div>
  )
}

export default Banner2
