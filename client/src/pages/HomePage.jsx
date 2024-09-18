import React from 'react';
import { useSelector} from "react-redux"
import Navbar from '../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate()
  const name = useSelector((state) => state.authuser.user.name);

  return (
    <div>
      <Navbar/>
      <h1>HOME PAGE</h1>
    </div>
  )
}

export default HomePage
