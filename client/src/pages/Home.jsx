import React from 'react';
import { useSelector} from "react-redux"
import Navbar from '../components/Navbar';



function Home() {
  const name = useSelector((state) => state.authuser.user.user);


  return (
    <div>
      <Navbar/>
      <h1>HOME PAGE</h1>
      <p>Hello {name}</p>
    </div>
  )
}

export default Home
