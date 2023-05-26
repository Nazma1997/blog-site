import React, { useState } from 'react'
import { useGetPostQuery } from '../../redux/apiSlice/userSlice';
import Card from './Card';
import Navbar from './Navigation';
import Footer from '../Footer';

const AllPost = () => {
  const { data: posts } = useGetPostQuery();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);



  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === '') {
      setSearchResults([]);
    } else {
      const results = posts.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    }
  };


  return (
    <>

      <Navbar />

      <div className='flex justify-center'>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className='bg-slate-800 lg:w-6/12 w-8/12 text-2xl h-20 text-center text-white rounded-2xl mt-16 hover:outline-none border-0 shadow-2xl'
        />
      </div>
      <div>
        <h1 className='text-white  text-4xl py-5'>Get started with our <strong>All Posts</strong></h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">


          {searchTerm === ''

            ? posts?.map(item =>
              <Card item={item} key={item._id} />
            )
            : searchResults.map((item) => (
              <Card item={item} key={item._id} />
            ))}
        </div>
        <hr />
      </div>
      <Footer />
    </>
  )
}

export default AllPost
