import React from 'react'
import logo from '../images/logo.png';
import { MdFacebook } from 'react-icons/md';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import '../style.css'

const Footer = () => {
  return (
    <div>
      <div className='lg:flex justify-evenly mt-10 pb-10'>
      <div className='lg:w-4/12'>
        <img src={logo} className='logo'/>
        <p className='text-white text-2xl '>We are a community that celebrates contemporary culture
focused on technology, design, art and web.</p>
      </div>
     <div className='md:flex'>
     
      <div className=''>
          <div className='flex mt-5'>
         
          <div className='ml-12'>
            <p className='text-white text-xl '> Contract</p>
            <div className='flex mt-5'>
               <MdFacebook className='text-white text-2xl'/>
               <p className='text-white ml-2'> Facebook</p>
            </div>
            <div className='flex mt-5'>
               <AiFillTwitterCircle className='text-white text-2xl'/>
               <p className='text-white ml-2'> Twitter</p>
            </div>
            <div className='flex mt-5'>
               <AiFillLinkedin className='text-white text-2xl'/>
               <p className='text-white ml-2'> Linkedin</p>
            </div>
            <div className='flex mt-5'>
               <AiFillYoutube className='text-white text-2xl'/>
               <p className='text-white ml-2'> Youtube</p>
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
