import React from 'react'
import { useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TotalCaloriesBurnedChart = () => {
    const activities =  useSelector((state) => state.authuser.user.activities || []);
    const labels = activities.map(activity => activity.date.split('T')[0])
    const data = activities.map(activity => activity.totalCaloriesBurned)

    const chartData = ({
      labels: labels,
      datasets: [
        {
          label: 'Total Calories Burned',
          data: data,
          borderColor: 'rgba(75, 192, 192, 1)',
           backgroundColor: 'rgba(75, 192, 192, 0.2)',
           fill: true,
           tension: 0.1,
        },
      ],
    });

    const options = {
        maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Calories Burned',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Date',
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.parsed.y} calories`;
            },
          },
        },
      },
    };

  return (
    <div style={{ width: '80%', height: '300px' }}>
      {activities.length > 0 && (
        <>
        <h2>Total Calories Burned Over Time</h2>
        <Line data={chartData} options={options} />
        </>
      )}
    </div>
  )
}

export default TotalCaloriesBurnedChart
