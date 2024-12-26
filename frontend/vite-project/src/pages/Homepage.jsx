import { useNavigate } from 'react-router-dom'
import Homescreen from './home/Homescreen'


const Homepage = () => {
  const user = true;
  const navigate = useNavigate();

  if(!user){
    navigate("/login");
  }
  return (
    <Homescreen />
  )
}

export default Homepage
