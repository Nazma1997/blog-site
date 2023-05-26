import React from 'react'
import logo from '../../images/logo.png';
import '../../style.css'
import FullDescription from './FullDescription';
import SharePost from './SharePost';
import NewerPost from './NewerPost';
import LatestPost from './LatestPosts';
import Navbar from './Navigation';
import Footer from '../Footer';

const Design = () => {
  return (
   <>
    <Navbar />
    <div>
      <div className='pb-10'>
      <div className='flex justify-center'>
     <img className=' text-xl design border-8 border-gray-700 rounded-full my-10' src={logo} alt='the logo'/>
     
     </div>
    <div className='flex justify-center'>
    <h1 className=' lg:text-6xl md:text-5xl text-2xl    font-bold'>Design </h1>
     
     <h1  className='ml-8 bg-slate-500 flex justify-center items-center rounded-full font-bold'  style={{height:'30px', width:'30px'}}>8</h1>
     
    </div>
    <h1 className='text-center my-10 text-2xl lg:mx-44'>Controversiam veniunt, de iis, si placet Disseramus Iam quae corporis sunt, ea nec auctoritatem cum animi partibus.Controversiam veniunt, de iis, si placet Disseramus Iam quae corporis sunt, ea nec auctoritatem cum animi partibus.</h1>
    
    </div>

<FullDescription />
<SharePost />
<NewerPost />
<LatestPost />
    </div>

    <Footer />
   </>
  )
}

export default Design
