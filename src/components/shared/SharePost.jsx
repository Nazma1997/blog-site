import React from 'react'
import { MdFacebook } from 'react-icons/md';
import { BsCircle } from 'react-icons/bs';
import { AiFillLinkedin, AiFillPlusCircle, AiFillTwitterCircle } from 'react-icons/ai';

const SharePost = () => {
  return (
    <div className='text-white my-10 pb-10 lg:w-3/12 md:w-6/12'>
        <p >Share this post</p>
        <div className='p-10 mt-9 flex rounded-2xl justify-evenly bg-gray-700'>
        <MdFacebook className='text-white text-2xl'/>
        <AiFillTwitterCircle className='text-white text-2xl '/>
        <AiFillLinkedin className='text-white text-2xl'/>
       <div className='flex'>
        <BsCircle className='text-white text-2xl' />
        <AiFillPlusCircle className='text-white text-2xl -ml-4 '/>

       </div>
        </div>
      
    </div>
  )
}

export default SharePost
