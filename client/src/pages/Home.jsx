import React, {useEffect} from 'react';
import LogOutButton from '../components/LogOutButton';
import { fetchUser } from '../redux/auth';
import {useDispatch, useSelector} from "react-redux"




function Home() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.authuser.user.user);
  
  
  
  // Based on hasParams user is directed to createParams page or to home page
 


  useEffect(() => {
    dispatch(fetchUser());
  }, [])
  
 
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p>Hello {name}</p>
      <LogOutButton/>
    </div>
  )
}

export default Home
