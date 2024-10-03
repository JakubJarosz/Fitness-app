import './App.css';
 import { Route, Routes } from 'react-router-dom';
 import { useSelector } from 'react-redux';
 import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import axios from 'axios';
import  { Toaster } from 'react-hot-toast';
import React, {useEffect} from 'react';
import {useDispatch} from "react-redux"
import { fetchUser } from './redux/authSlice';
import RouteListener from './hooks/RouteListener';
import CreateParametersPage from "./pages/CreateParametersPage"
import CreateWorkoutPage from './pages/CreateWorkoutPage';
import EditProfilePage from './pages/EditProfilePage';
import CardioPage from './pages/CardioPage';
import LoadingSpin from './components/reusable-components/LoadingSpin';


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true

function App() {
  const loading = useSelector((state) => state.authuser.loading);


    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch]) 
  
  
  return (
    <div className="App">
        <RouteListener />
    <Toaster position='top-right' toastOptions={{duration: 2500}}/>
    {loading ? (<LoadingSpin/>) : (
       <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/register' element={<RegisterPage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/parameters' element={<CreateParametersPage/>}/>
       <Route path='/create-plan' element={<CreateWorkoutPage/>}/>
       <Route path='/editprofile' element={<EditProfilePage/>}/>
       <Route path='/cardio' element={<CardioPage/>}/>
      </Routes>
    )}
    </div>
  );
}

export default App;
