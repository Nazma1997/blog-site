import React from 'react'
import Card from './shared/Card'
import Subscribe from './Subscribe'
import { useGetPostQuery } from '../redux/apiSlice/userSlice';
import { Link } from 'react-router-dom';

const Recommended = () => {
  const { data: posts } = useGetPostQuery();
  return (
    <>
      <div>
        <h1 className='text-white  text-4xl py-5'>Recommended</h1>

        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {
              posts?.slice(10, 14)?.map(item =>
                <Card item={item} key={item._id} />
              )
            }


          </div>
          <div className='flex justify-center'>
            <Link to='/all-post'><p className=' px-5 py-4 rounded-lg text-xl font-semibold text-white  bg-gray-800 mb-5'>See More</p></Link>
          </div>
        </div>
        <Subscribe />
        <hr />
      </div>

    </>
  )
}

export default Recommended

