import React from 'react'
import { Link } from 'react-router-dom';
import LogOutButton from "../components/LogOutButton"

function Navbar() {
  return (
   
      <nav>
          <ul>
          <li>
              <Link to="/"><button>Home</button></Link>
            </li>
            <li>
              <Link to="/login"><LogOutButton/></Link>
            </li>
          </ul>
         </nav>
    
  )
}

export default Navbar
