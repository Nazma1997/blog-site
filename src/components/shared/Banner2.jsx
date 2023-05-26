import React from 'react'
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import '../../style.css'


const Banner2 = ({data}) => {

  const createdAt = data?.createdAt;
  const dateObj = new Date(createdAt);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Months are zero-based, so add 1
  const year = dateObj.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;

  return (
    <div className='lg:flex justify-between'>
      <div className="px-1  mt-16">
      <div className='flex'>
        <Link to='/design' className='bg-gray-500 text-white lg:w-1/12 w-4/12 rounded-2xl text-center py-1 text-bold mb-2 '><p className='hover:underline' >Design</p></Link>
       <Link to='/technology' className='bg-gray-500 text-white lg:w-1/12 w-5/12 rounded-2xl text-center py-1.5 text-bold mb-2 mx-2'> <p className='hover:underline'>Technology</p></Link>
        <Link to='/product' className='bg-gray-500 text-white lg:w-1/12 w-4/12 rounded-2xl text-center py-1 text-bold mb-2'><p className='hover:underline' >Product</p></Link>
        </div>
        <h3 className="lg:text-5xl text-2xl text-white  font-bold mt-12 mb-5">{data?.title}</h3>
        <h3 className="text-white font-normal text-xl my-8 lg:w-6/12 " dangerouslySetInnerHTML={{__html:data?.shortDescription}}></h3>
     
         <div className='flex'>
           <img src={data?.image} className="mt-7 rounded-full  author3" />
           <div className='mt-8 ml-2'>
           <h3 className="text-white font-normal  ">{data?.name}</h3>
           <h3 className="text-white font-normal  ">{formattedDate} - 5 minutes read</h3>
           </div>
         </div>
      </div>
      <div>
        <img src={data?.image} alt='the logo' className=' rounded-2xl lg:mt-0 mt-10' style={{height:'500px', width:'900px'}} />
      </div>
    </div>
  )
}

export default Banner2
