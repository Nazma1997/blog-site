import React from 'react'
import logo from '../images/logo.png';
import { MdFacebook } from 'react-icons/md';
import '../style.css'

const Footer = () => {
  return (
    <div>
      <div className='lg:flex justify-evenly mt-10 pb-10'>
      <div className='lg:w-4/12'>
        <img src={logo} className='logo'/>
        <p className='text-white text-2xl '>A minimal, functional theme for running a paid-membership publication on Ghost.</p>
      </div>
     <div className='md:flex'>
     <div className=''>
          <div className='flex'>
          <div>
            <p className='text-white text-xl '> Social</p>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
          </div>
          <div className='ml-12'>
            <p className='text-white text-xl '> About</p>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
          </div>

          </div>

      </div>
      <div className=''>
          <div className='flex'>
          <div>
            <p className='text-white text-xl '> Social</p>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
          </div>
          <div className='ml-12'>
            <p className='text-white text-xl '> Social</p>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
          </div>

          </div>

      </div>
     </div>
    </div>

    <p className='text-white text-center pb-10'>© Nazma 2023. All are reserved.</p>
    </div>
  )
}

export default Footer
