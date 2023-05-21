import React from 'react'
import logo from '../../images/logo.png';


const NewerPost = () => {
  return (
    <div className='pb-10'>
      <hr />
      <div className='lg:flex  justify-between my-5'>
        <div className='flex mt-5'>
           <img src={logo} alt='the logo' className='w-3/12 '/>
           <div className='lg:mt-20 md:mt-12 mx-5  min-w-fit'>
            <p>Newer Post</p>
            <h1 className='text-2xl hover:underline'> Brand is just a perception, and will match reality  </h1>
           </div>
        </div>

        <div className='flex mt-5'>
           
           <div className='lg:mt-20 md:mt-12  ml-5'>
            <p>Older Post</p>
            <h1 className='text-2xl hover:underline'>Brand is just a perception, and will match reality over </h1>
           </div>
           <img src={logo} alt='the logo' className='w-3/12'/>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default NewerPost
