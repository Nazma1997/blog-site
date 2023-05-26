import React from 'react'
import { useGetPostQuery } from '../redux/apiSlice/userSlice';
import Card from './shared/Card';
import Navbar from './shared/Navigation';
import Footer from './Footer';

const Profile = () => {

  const { data: posts } = useGetPostQuery();
  const email = localStorage.getItem('email');
  const filteredItems = posts?.filter(item => item.email === email);

  return (
  <>
   <Navbar />
   <div>
      <h1 className='text-white  text-4xl py-5'><strong>All Posts</strong></h1>
      {/* <div className="lg:flex">
        <Card />
      
        </div> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
         {
          filteredItems?.map(item =>
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

export default Profile
