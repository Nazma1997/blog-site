import React from 'react'
import Card from './Card'
import { useGetPostQuery } from '../../redux/apiSlice/userSlice'
import { Link } from 'react-router-dom';

const Stories = () => {

  const { data: posts } = useGetPostQuery();


 
  return (
    <div>
      <h1 className='text-white  text-4xl py-5'>Get started with our <strong>best stories</strong></h1>
      {/* <div className="lg:flex">
        <Card />
      
        </div> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
         {
          posts?.slice(0,4)?.map(item =>
             <Card  item={item} key={item._id}/>
            )
         }
      </div>
      <div className='flex justify-center'>
     <Link to='/all-post'><p className=' px-5 py-4 rounded-lg text-xl font-semibold text-white  bg-gray-800 mb-5'>See More</p></Link>
     </div>
      <hr />
    </div>
  )
}

export default Stories
