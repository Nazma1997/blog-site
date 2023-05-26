import React from 'react'

const FullDescription = ({data}) => {
  return (
    <div className='text-white  min-w-fit	lg:mx-0 ' >
      {/* <div className='flex justify-center'> */}
     {/* <p className=' px-5 py-4 text-xl font-semibold text-white  bg-gray-800 mb-5'></p> */}
     {/* </div> */}
     <p className="text-white font-normal  text-xl hover:underline text-center mt-32 " dangerouslySetInnerHTML={{__html:data?.fullDescription}}></p>
    </div>
  )
}

export default FullDescription
