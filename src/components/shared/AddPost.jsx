import React from 'react'
import Navbar from './Navigation'

const AddPost = () => {
  return (
   <>
    <Navbar />
    <div className="min-h-screen  lg:flex items-center justify-center ">
    <form className="w-full p-6 lg:mx-32  rounded shadow-2xl">
      <h2 className="text-2xl mb-4">Add a post</h2>
      <div className="mb-4">
        <label className="block mb-2" >Upload a image</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="file" id="username" name="username" placeholder="" />
      </div>
      <div className="mb-4">
        <label className="block mb-2" >Add a title</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="password" name="password" placeholder="Title" />
      </div>
      <div className="mb-4">
        <label className="block mb-2" >Short Description</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="password" name="password" placeholder="Short description" />
      </div>
      <div className="mb-4">
        <label className="block mb-2" >Full Description</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="password" name="password" placeholder="Full description" />
      </div>
      <div className="">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Register</button>
      </div>
    </form>
  </div>
   </>
  )
}

export default AddPost
