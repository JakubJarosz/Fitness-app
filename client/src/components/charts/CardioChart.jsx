import React from 'react'
import { useSelector } from 'react-redux'
import { Chart } from 'chart.js'

const CardioChart = () => {
    const exercises = useSelector((state) => state.authuser.user.activities);
    console.log(exercises)
  return (
    <div>
      <h1>siema</h1>
    </div>
  )
}

export default CardioChart
