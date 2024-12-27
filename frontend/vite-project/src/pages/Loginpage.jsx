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
    
    axios.post( "https://loginassign-4tvv.onrender.com/api/login" , {email , password} , {withCredentials: true})
    .then((res) => {
      console.log("hello" , res.data);
      const yourtoken = res.data.token;
      window.localStorage.setItem('user_info',JSON.stringify(res.data))
      toast.success("Login successful.");
      navigate("/");
    }).catch((err) => {
      console.log("error : " , err);
      toast.error(err.  response.data.message || "login failed.");
    });
  }

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-white">
      <div className="relative bg-cover flex h-[80vh] w-[80%] max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <div className="office-bg bg-cover flex-1 text-white flex flex-col justify-center place-items-start px-10 py-12">
          <h1 className="text-5xl font-bold mb-4">HELLO <br /> WORLD.</h1>
          <p className="text-lg mb-6 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link to = "/signup" className="bg-pink-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-pink-600">Sign-up</Link>
          
        </div>

        <div className="flex-1 bg-white flex flex-col justify-center items-center px-10 py-12">
          <Layers className='-mt-20 mb-[70px]' size={70} color="#ec4899" />

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
