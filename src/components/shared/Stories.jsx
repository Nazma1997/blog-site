import React from 'react'
import Card from './Card'
import { useGetPostQuery } from '../../redux/apiSlice/userSlice'

const Stories = () => {

  const { data: posts } = useGetPostQuery();


 
  return (
    <div>
      <h1 className='text-white  text-4xl py-5'>Get started with our <strong>best stories</strong></h1>
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
  )
}

export default Stories
