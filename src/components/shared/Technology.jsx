import React from 'react'
import logo from '../../images/logo.png';
import '../../style.css'

const Technology = () => {
  return (
    <div className='pb-10'>
      <div className='flex justify-center'>
     <img className=' text-xl design border-8 border-gray-700 rounded-full my-10' src={logo} alt='the logo'/>
     
     </div>
    <div className='flex justify-center'>
    <h1 className=' text-6xl  font-bold'>Technology </h1>
     
     <h1  className='ml-8 bg-slate-500 flex justify-center items-center rounded-full font-bold'  style={{height:'30px', width:'30px'}}>7</h1>
     
    </div>
    <h1 className='text-center my-10 text-2xl lg:mx-44'>Controversiam veniunt, de iis, si placet Disseramus Iam quae corporis sunt, ea nec auctoritatem cum animi partibus.Controversiam veniunt, de iis, si placet Disseramus Iam quae corporis sunt, ea nec auctoritatem cum animi partibus.</h1>
    
    </div>
  )
}

export default Technology
