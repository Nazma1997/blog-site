import React from 'react'
import Card from './Card'

const LatestPost = () => {
  return (
    <div>
      <hr />
      <h1 className='text-white  text-4xl py-5'>Check out the <strong>latest posts</strong></h1>
      <div className="lg:flex">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <hr />
    </div>
  )
}

export default LatestPost
