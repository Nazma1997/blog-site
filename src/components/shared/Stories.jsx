import React from 'react'
import Card from './Card'

const Stories = () => {
  return (
    <div>
      <h1 className='text-white  text-4xl py-5'>Get started with our <strong>best stories</strong></h1>
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

export default Stories
