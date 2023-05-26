import React, { useState } from 'react'
import { useGetPostQuery } from '../redux/apiSlice/userSlice';
import Card from './shared/Card';
import Navbar from './shared/Navigation';
import Footer from './Footer';

const Profile = () => {

  const { data: posts } = useGetPostQuery();
  const email = localStorage.getItem('email');
  const filteredItems = posts?.filter(item => item.email === email);


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);



  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === '') {
      setSearchResults([]);
    } else {
      const results = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  // Pagination
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);


  const totalItems = filteredItems?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = filteredItems?.slice(startIndex, endIndex);


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
      <div className='pb-10'>
        <h1 className='text-white  text-4xl py-5'> <strong>Your profile</strong></h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">


          {searchTerm === ''

            ? displayedItems?.map(item =>
              <Card item={item} key={item._id} />
            )
            : searchResults.map((item) => (
              <Card item={item} key={item._id} />
            ))}
        </div>

      </div>


      <div className='flex justify-center mb-10'>
        <button
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
          className='bg-slate-800 text-white px-10 py-3 rounded-2xl shadow-lg text-xl font-bold'
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
            className='text-2xl mx-5 text-white font-bold'
            
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          className='bg-slate-800 text-white px-10 py-3 rounded-2xl shadow-lg text-xl font-bold'
        >
          Next
        </button>
      </div>
      <hr />
    <Footer />
  </>
  )
}

export default Profile
