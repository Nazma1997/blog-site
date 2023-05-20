import React from 'react'

const Subscribe = () => {
  return (
    <div className='my-10 lg:flex justify-between '>
    <h1 className='text-white text-5xl mb-8'>Subscribe to <strong>new posts</strong></h1>
    <div className='px-10 py-5 bg-gray-700 rounded-full  '>
      <input placeholder='Your Email Address' className='bg-gray-700 outline-none '/>
      <button className='text-white text-xl font-bold bg-violet-900	 px-8 lg:py-8 py-5 lg:-my-5 lg:-mx-10  rounded-full  '>Subscribe</button>
    </div>
   </div>
  )
}

export default Subscribe
