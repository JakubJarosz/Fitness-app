import React from 'react';
import Navbar from '../components/navbar/Navbar';
import TotalCaloriesBurnedChart from 'src/components/charts/TotalCaloriesBurnedChart';
import StepsTakenChart from 'src/components/charts/StepsTakenChart';
function HomePage() {


  return (
    <div>
      <Navbar/>
   <TotalCaloriesBurnedChart/>
   <StepsTakenChart/>
    </div>
  )
}

export default HomePage
