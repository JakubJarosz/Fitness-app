import React, {useEffect} from 'react';
import axios from "axios";
import LogOutButton from '../components/LogOutButton';


function Home() {
  useEffect(() => {
    axios.get("/profile").then(({data}) => {
      console.log(data)
    })
  })
  return (
    <div>
      <h1>HOME PAGE</h1>
      <LogOutButton/>
    </div>
  )
}

export default Home
