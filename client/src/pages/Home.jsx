import React from 'react';
import { useSelector} from "react-redux"
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate()
  const name = useSelector((state) => state.authuser.user.name);

  return (
    <div>
      <Navbar/>
      <h1>HOME PAGE</h1>
      <p>Hello {name}</p>
      <button onClick={(() => navigate("/parameters"))}>create your params</button>
    </div>
  )
}

export default Home
