import React from 'react'
import logo from '../images/logo.png';
import '../style.css';
import Card from './shared/Card';
import { useGetPostQuery } from '../redux/apiSlice/userSlice';

const Author = () => {
  const { data: posts } = useGetPostQuery();

  return (
   <div className='pb-10'>
     <div className=' lg:flex md:flex justify-between pb-10'>
       <h1 className='text-white  text-4xl py-5'>See what we’ve <strong>written lately</strong></h1>
       <div className=' mt-5'>
         <div className='flex'>
         
         <img className=' text-xl author border-8 border-gray-700 rounded-full ' src={logo} alt='the logo'/>
         <img src={logo}  className="  text-xl author border-8 border-gray-700 rounded-full -ml-8 	"/>
         <img src={logo}  className="  text-xl author border-8 border-gray-700 rounded-full -ml-8"/>
         <img src={logo}  className="  text-xl author border-8 border-gray-700 rounded-full -ml-8"/>
         </div>
         <p className='text-gray-500  text-bold lg:ml-8 '>Meet Our Top Authors</p>
       </div>
      
      
    </div>
   
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
         {
          posts?.map(item =>
             <Card  item={item} key={item._id}/>
            )
         }
      </div>
     <div className='flex justify-center'>
     <p className=' px-5 py-4 rounded-lg text-xl font-semibold text-white  bg-gray-800 mb-5'>See More</p>
     </div>
    
     <hr />
   </div>
  )
}

export default Author
