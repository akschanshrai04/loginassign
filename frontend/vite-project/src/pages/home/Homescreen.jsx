import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function Homescreen() {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user_info'));
        console.log("check");
        if (user) {
            setUser(user);
        }
    }, []);
    const handlelogout = () => {
      axios.post("http://localhost:7000/api/logout" , {} , {withCredentials : true})
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log("error : " , err.message)
    });
    }
    

    return (
      <div className='flex justify-evenly'>
        {/* <div className="text-red-500">
          homepage , hello {JSON.stringify(user.user.email)}
        </div> */}
        <div>
          Hello , this is HomePage
        </div>
        <button className="bg-pink-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-pink-600" onClick={handlelogout}>
          Logout
        </button>
      </div>
    )
}

export default Homescreen
