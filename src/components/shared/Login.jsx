import React, { useState } from 'react';
import register from '../../images/register.png';
import logo from '../../images/logo.png';
import '../../style.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navigation';
import { useLoginUserMutation } from '../../redux/apiSlice/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();


    const data = {
      'password': password,
      'email': email

    }
    loginUser(data)
    setEmail('');
    setPassword('');
    
  }

  return (
    <div>
      <Navbar />
      <div className='lg:flex md:flex justify-between'>
        <img src={register} alt='the register' className='lg:w-6/12 md:w-5/12 w-full  	h-screen' />
        <div className='flex justify-center  lg:mr-96 md:mr-10 items-center lg:-mt-5 '>
          <div>
            <img className=' text-xl logo border-8 border-gray-700 rounded-full my-10 ' src={logo} alt='the logo' />

            <form className=" p-6  rounded shadow-md">
              <h2 className="lg:text-4xl md:text-3xl text-2xl mb-4">Welcome Back</h2>

              <div className="mb-4">
                <label className="block mb-2" >User Email :</label>
                <input className="w-full px-4 py-2 border-0 rounded-md focus:outline-none focus:border-blue-500 bg-gray-500" type="email" id="username" name="username" placeholder="Enter your email" onChange={e => setEmail(e.target.value)}/>
              </div>

              <div className="mb-4">
                <label className="block mb-2" >Password :</label>
                <input className="w-full px-4 py-2 border-0 rounded-md focus:outline-none focus:border-blue-500 bg-gray-500" type="password" id="password" name="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="flex justify-start">
                <button className="px-4 py-2 bg-blue-500 text-xl rounded hover:bg-blue-600" type='submit' onClick={submitForm} >Login</button>
              </div>

              <p className='my-10'>Are you create an account? <Link to='/register'><span className='hover:underline'>Register</span></Link></p>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
