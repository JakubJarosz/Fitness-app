import React, {useEffect} from 'react';
import LogOutButton from '../components/LogOutButton';
import { fetchUser } from '../redux/auth';
import {useDispatch, useSelector} from "react-redux"


function Home() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.authuser.user)

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div>
      <h1>HOME PAGE</h1>
      <p>Hello {user}</p>
      <LogOutButton/>
    </div>
  )
}

export default Home
