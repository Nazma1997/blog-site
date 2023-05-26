import React from 'react'
import { useGetPostQuery } from '../../redux/apiSlice/userSlice';
import Card from './Card';
import Navbar from './Navigation';
import Footer from '../Footer';

const AllPost = () => {
  const { data: posts } = useGetPostQuery();


 
  return (
   <>
    <Navbar />
    <div>
      <h1 className='text-white  text-4xl py-5'>Get started with our <strong>All Posts</strong></h1>
      {/* <div className="lg:flex">
        <Card />
      
        </div> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
         {
          posts?.map(item =>
             <Card  item={item} key={item._id}/>
            )
         }
      </div>
      <hr />
    </div>
    <Footer />
   </>
  )
}

export default AllPost
