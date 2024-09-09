import React, {useEffect} from 'react';
import LogOutButton from '../components/LogOutButton';
import { fetchUser } from '../redux/auth';
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.authuser.user.user);
  const hasParams = useSelector((state) => state.authuser.hasParams);
  
  // Based on hasParams user is directed to createParams page or to home page
  const directPage = () => {
    if(hasParams) {
      navigate("/")
    } else {
      navigate("/userparameters")
    }
  }


  useEffect(() => {
    dispatch(fetchUser());
  }, [])

  useEffect(() => {
    directPage();
  }, [hasParams])

  return (
    <div>
      <h1>HOME PAGE</h1>
      <p>Hello {name}</p>
      <LogOutButton/>
    </div>
  )
}

export default Home
