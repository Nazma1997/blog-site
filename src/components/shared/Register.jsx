import React, { useState } from 'react';
import register from '../../images/register.png';
import logo from '../../images/logo.png';
import '../../style.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navigation';
import { useCreateUserMutation } from '../../redux/apiSlice/userSlice';
import axios from 'axios';

const Register = () => {

  const [createUser] = useCreateUserMutation();
  
  const navigate = useNavigate()

  const [name, setName] =useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('')

  const apiKey = '837d05f4d0c9787e5980a5a7fe323afd'

  

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
      'name': name,
      'image': imageUrl,
      'password': password,
      'email': email

    }
    createUser(data)

    localStorage.setItem('name', name);

    // Save image in local storage
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem('image', reader.result);
    };
    reader.readAsDataURL(image);
    setName('');
    setEmail('');
    setImage('');
    setPassword('');
    navigate('/')
  }



  return (
    <div>
      <Navbar />

    
      <div className='lg:flex md:flex justify-between '>
       <img src={register} alt='the register' className='lg:w-6/12 md:w-5/12 w-full 	 h-screen' />
       <div className='flex justify-center  md:mr-10 items-center lg:mr-96 '>
      <div>
      <img className=' text-xl logo border-8 border-gray-700 rounded-full my-10 ' src={logo} alt='the logo'/>
      
    <form className=" p-6  rounded shadow-md">
      <h2 className="lg:text-4xl md:text-3xl text-2xl mb-4">Create An Account</h2>
      <div className="mb-4">
        <label className="block mb-2" >User Name :</label>
        <input className="w-full px-4 py-2 border-0 rounded-md focus:outline-none focus:border-blue-500 bg-gray-500" type="text" id="username" name="username" placeholder="Enter your username" onChange={e => setName(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block mb-2" >User Email :</label>
        <input className="w-full px-4 py-2 border-0 rounded-md focus:outline-none focus:border-blue-500 bg-gray-500" type="email" id="username" name="username" placeholder="Enter your email"  onChange={e => setEmail(e.target.value)}/>
      </div>
      <div className="mb-4">
        <label className="block mb-2" >User Image :</label>
        <input className="w-full px-4 py-2 border-0 rounded-md focus:outline-none focus:border-blue-500 bg-gray-500" type="file" id="username" name="username" placeholder="Enter your email" onChange={handleImageChange}/>
      </div>
      <div className="mb-4">
        <label className="block mb-2" >Password :</label>
        <input className="w-full px-4 py-2 border-0 rounded-md focus:outline-none focus:border-blue-500 bg-gray-500" type="password" id="password" name="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="flex justify-start">
        <button className="px-4 py-2 bg-blue-500 text-xl rounded hover:bg-blue-600" onClick={submitForm} type='submit'> Register</button>
      </div>
      <p className='my-10'>Already Have An Account? <Link to='/login'><span className='hover:underline'>Login</span></Link></p>
    </form>

      </div>
     
       </div>
    </div>
    </div>
  )
}

export default Register
