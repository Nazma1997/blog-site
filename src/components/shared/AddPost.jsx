import React, { useState } from 'react'
import Navbar from './Navigation'
import { useCreatePostMutation, useGetUserQuery } from '../../redux/apiSlice/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer';
import Editor from './Editor';

const AddPost = () => {

  const [createPost] = useCreatePostMutation();  
  const {data: authors = []} = useGetUserQuery()
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [tag, setTag] = useState('');

  const [image, setImage] = useState('');
  const email = localStorage.getItem('email');
  const name = localStorage.getItem('name');
  const apiKey = '837d05f4d0c9787e5980a5a7fe323afd';
  const user = localStorage.getItem('email');

  const filteredAuthors = authors.filter(author => author.email === user);
  

// console.log(filteredAuthors[0]?.name)


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  
  const submitForm = async(e) => {
    e.preventDefault();

    const url = "https://api.imgbb.com/1/upload";
    const formData = new FormData();
    formData.append("image", image);
    formData.append("key", apiKey);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      }}
      const imgbbResponse = await axios.post(url, formData, config);
      const imageUrl = imgbbResponse.data.data.url;

    const data = {
      'name': filteredAuthors[0]?.name,
      'image': imageUrl,
      'email': email,
      'title': title,
      'shortDescription': shortDescription,
      'fullDescription': fullDescription,
      'tag': tag,
      'author': filteredAuthors[0]?.image,
      
    }
    createPost(data)

    navigate('/profile')
  }


  return (
   <>
    <Navbar />
    <div className="min-h-screen  lg:flex items-center justify-center  ">
    <form className="w-full p-6 lg:mx-32  rounded shadow-2xl pb-10">
      <h2 className="text-2xl mb-4">Add a post</h2>
      <div className="mb-4">
        <label className="block mb-2" >Upload a image</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-800" type="file" id="username" name="username" placeholder="" onChange={handleImageChange } />
      </div>
      <div className="mb-4">
        <label className="block mb-2" >Add a title</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-800" type="text" id="password" name="password" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block mb-2" >Short Description</label>
        {/* <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-800" type="text" id="password" name="password" placeholder="Short description" onChange={e => setShortDescription(e.target.value)}/> */}
        <Editor setFullDescription={setShortDescription} fullDescription={shortDescription} className="bg-slate-800"/>
      </div>
      <div className="mb-4">
        <label className="block mb-2" >Full Description</label>
        {/* <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-800" type="text" id="password" name="password" placeholder="Full description" onChange={e => setFullDescription(e. target.value)}/> */}
        <Editor setFullDescription={setFullDescription} fullDescription={fullDescription} className="bg-slate-800"/>
      </div>
      <div className="mb-4">
        <label className="block mb-2" >Tag</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-800" type="text" id="password" name="password" placeholder="Tag"  onChange={e => setTag(e.target.value) }/>
      </div>
      <div className="">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit" onClick={submitForm}>Create </button>
      </div>
    </form>
  </div>
  <hr />
  <Footer />
   </>
  )
}

export default AddPost
