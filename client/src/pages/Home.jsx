import React, {useEffect} from 'react';
import LogOutButton from '../components/LogOutButton';
import { fetchUser } from '../redux/auth';
import {useDispatch} from "react-redux"


function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div>
      <h1>HOME PAGE</h1>
      <LogOutButton/>
    </div>
  )
}

export default Home
