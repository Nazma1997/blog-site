import React from 'react';
import logo from '../../images/logo.png';
import '../../style.css';
import { Link } from 'react-router-dom';

const Card = ({item}) => {

  // console.log('item', item)
  const author = localStorage.getItem('image');
  return (
    < Link to={`/details/${item?._id}`}>
      <div className="	 rounded-lg shadow-2xl overflow-hidden max-w-sm mx-auto animate-rotate pb-16 my-6 ">
      <img src={item?.image} alt="Card" className="w-full  object-cover card bg-white rounded-lg" style={{height:'500px'}}/>
      <img src={author} alt='the author' className="-mt-16 ml-8  w-1/6 rounded-full  author2" />
      <div className="px-4  mt-8">
        <div className='flex'>
        <Link to='/design' className='bg-gray-500 text-white w-4/12 rounded-2xl text-center py-1 text-bold mb-2 '><p className='hover:underline' >Design</p></Link>
       <Link to='/technology' className='bg-gray-500 text-white w-4/12 rounded-2xl text-center py-1 text-bold mb-2 mx-1'> <p className='hover:underline'>Technology</p></Link>
        <Link to='/product' className='bg-gray-500 text-white w-4/12 rounded-2xl text-center py-1 text-bold mb-2'><p className='hover:underline' >Product</p></Link>
        </div>
        <h3 className="text-xl text-white  font-bold mb-2 hover:underline"> {item?.title}</h3>
        {/* <h3 className="text-white font-normal text-xl hover:underline "  dangerouslySetInnerHTML={{__html:item?.shortDescription}}></h3> */}
       
      </div>
    </div>
    </Link>
  );
};

export default Card;
