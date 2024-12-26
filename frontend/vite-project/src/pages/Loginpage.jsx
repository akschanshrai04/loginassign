// import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
import toast from "react-hot-toast";
import axios from 'axios'
import { Layers } from 'lucide-react';



const Loginpage = () => {
  const [email , setemail] = useState("");
  const [password , setpassword] = useState("");
  const navigate = useNavigate();


  const handlesubmit = async (e) => {
    e.preventDefault();
    
    axios.post( "http://localhost:7000/api/login" , {email , password} , {withCredentials: true})
    .then((res) => {
      console.log("hello" , res.data);
      window.localStorage.setItem('user_info',JSON.stringify(res.data))
      toast.success("Login successful.");
      navigate("/");
    }).catch((err) => {
      console.log("error : " , err);
      toast.error(err.  response.data.message || "login failed.");
    });
  }

  // return (
  //   <div className='h-screen w-full hero-bg bg-blue-400'>
  //       <div className='flex justify-center items-center mx-3'>
  //           <div className='backdrop-blur-sm shadow-2xl mt-20 w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg '>
  //               <h1 className='text-2xl font-bold text-white text-center'> LOGIN </h1>
  //               <form onSubmit={handlesubmit} class="space-y-4 md:space-y-6" action="#">
  //                   <div>
  //                     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
  //                     <input onChange = {(e) => setemail(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
  //                   </div>
  //                 <div>
  //                     <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
  //                     <input onChange = {(e) => setpassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
  //                 </div>
  //                 <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">LOGIN</button>
  //                 <p class="text-sm font-light text-gray-500 dark:text-gray-400">
  //                     Don't have an account? <Link to = "/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign-up here</Link>
  //                 </p>
  //             </form>
  //           </div>
  //       </div>
  //   </div>
  // )
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-white">
      <div className="relative bg-cover flex h-[80vh] w-[80%] max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Pane */}
        <div className="office-bg bg-cover flex-1 text-white flex flex-col justify-center place-items-start px-10 py-12">
          <h1 className="text-5xl font-bold mb-4">HELLO <br /> WORLD.</h1>
          <p className="text-lg mb-6 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link to = "/signup" className="bg-pink-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-pink-600">Sign-up</Link>
          {/* <button className="bg-pink-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-pink-600">
            Sign Up
          </button> */}
        </div>

        {/* Right Pane */}
        <div className="flex-1 bg-white flex flex-col justify-center items-center px-10 py-12">
          {/* Logo */}
          <Layers className='-mt-20 mb-[70px]' size={70} color="#ec4899" />

          {/* Form */}
          <form onSubmit={handlesubmit} className="w-full max-w-sm space-y-4">
            <input
              type="text"
              placeholder="Email"
              onChange = {(e) => setemail(e.target.value)}
              name="email" 
              id="email"
              className="w-full border-b-2  border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              onChange = {(e) => setpassword(e.target.value)}
              name="password"
              id="password"
              className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-blue-500"
            />
            <div className='flex items-center justify-evenly'>
              <button
                type="submit"
                className="w-[50%] bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700"
              >
                Login
              </button>
              <a
                href="#"
                className="block text-center text-gray-400 text-sm hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage
