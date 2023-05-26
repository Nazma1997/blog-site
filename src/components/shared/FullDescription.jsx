import React from 'react'

const FullDescription = ({data}) => {
  return (
    <div className='text-white  min-w-fit	' >
      {/* <div className='flex justify-center'> */}
     {/* <p className=' px-5 py-4 text-xl font-semibold text-white  bg-gray-800 mb-5'></p> */}
     {/* </div> */}
     <p className=' '> {data?.fullDescription} </p>
    </div>
  )
}

export default FullDescription
