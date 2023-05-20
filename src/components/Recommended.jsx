import React from 'react'
import Card from './shared/Card'
import Subscribe from './Subscribe'

const Recommended = () => {
  return (
    <div>
      <h1 className='text-white  text-4xl py-5'>Recommended</h1>
      <div className="lg:flex">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
     <Subscribe />
        <hr />
    </div>
  )
}

export default Recommended

