import React from 'react';
import Navbar from '../components/navbar/Navbar';
import CardioChart from 'src/components/charts/CardioChart';
function HomePage() {


  return (
    <div>
      <Navbar/>
      <h1>HOME PAGE</h1>
      <CardioChart/>
    </div>
  )
}

export default HomePage
