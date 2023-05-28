import React from 'react'
import Card from './Card'
import { useGetPostQuery } from '../../redux/apiSlice/userSlice';

const LatestPost = () => {
  const { data: posts } = useGetPostQuery();
  return (
    <div>
      
      <h1 className='text-white  text-4xl py-5'>Check out the <strong>latest posts</strong></h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
         {
          posts?.slice(0,11).map(item =>
             <Card  item={item} key={item._id}/>
            )
         }
      </div>
        <hr />
    </div>
  )
}

export default LatestPost
