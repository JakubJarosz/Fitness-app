import './App.css';
import Navbar
 from './components/Navbar';
 import { Route, Routes } from 'react-router-dom';
 import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import  { Toaster } from 'react-hot-toast';
import UserParameters from './pages/UserParameters';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Toaster position='top-right' toastOptions={{duration: 2500}}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/userparameters' element={<UserParameters/>}/>
     </Routes>
    </div>
  );
}

export default App;
