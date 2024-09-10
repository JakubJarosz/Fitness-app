import './App.css';
import Navbar
 from './components/Navbar';
 import { Route, Router, Routes } from 'react-router-dom';
 import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import  { Toaster } from 'react-hot-toast';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchUser } from './redux/auth';
import RouteListener from './hooks/RouteListener';




axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchUser())
  }) 
  
  return (
    <div className="App">
        <RouteListener />
    <Toaster position='top-right' toastOptions={{duration: 2500}}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
