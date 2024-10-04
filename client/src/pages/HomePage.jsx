import React from 'react';
import Navbar from '../components/navbar/Navbar';
import TotalCaloriesBurnedChart from 'src/components/charts/TotalCaloriesBurnedChart';
import StepsTakenChart from 'src/components/charts/StepsTakenChart';
import TotalData from 'src/components/charts/TotalData';
function HomePage() {


  return (
    <div>
      <Navbar/>
      <TotalData/>
   <TotalCaloriesBurnedChart/>
   <StepsTakenChart/>
    </div>
  )
}

export default HomePage
