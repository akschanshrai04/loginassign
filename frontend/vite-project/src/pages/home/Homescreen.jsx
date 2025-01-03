import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Homescreen() {
    const navigate = useNavigate();
    
    const handlelogout = () => {
      axios.post("https://loginassign-4tvv.onrender.com/api/logout" , {} , {withCredentials : true})
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
