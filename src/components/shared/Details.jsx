import React, { useEffect, useState } from 'react'
import Banner2 from './Banner2'
import FullDescription from './FullDescription'
import SharePost from './SharePost'
import NewerPost from './NewerPost'
import LatestPost from './LatestPosts'
import Navbar from './Navigation'
import { useParams } from 'react-router-dom'
import { useGetSingleItemQuery } from '../../redux/apiSlice/userSlice'
import Footer from '../Footer'

const Details = () => {

  const { id } = useParams();
  const {data} = useGetSingleItemQuery(id)

  console.log(data)

  // console.log('items', data)

  
  return (
    <div>
      <Navbar />
        <Banner2 data={data}/>
      <FullDescription data={data}/>
      <SharePost />
      <NewerPost />
      <LatestPost />
      <Footer />
    </div>
  )
}

export default Details
