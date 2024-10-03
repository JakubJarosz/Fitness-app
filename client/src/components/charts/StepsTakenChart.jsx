import React from 'react'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function StepsTakenChart() {
    const activities = useSelector((state) => state.authuser.user.activities || []);
    const labels = activities.map(activity => activity.date.split('T')[0])
    const data = activities.map(activity => activity.stepsTaken);
    
    const chartData = ({
        labels: labels,
        datasets: [
          {
            label: 'Daily Steps Taken',
            data: data,
            borderColor: '#1dc9c9',
             backgroundColor: 'rgba(46, 82, 82, 0.2)',
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
                return `${context.parsed.y} steps`;
              },
            },
          },
        },
      };
 
  return (
    <div style={{ width: '80%', height: '300px', marginTop: "80px" }}>
      
      {activities.length > 0 && (
        <>
        <h2>Daily Steps </h2>
        <Bar data={chartData} options={options} />
        </>
      )}
    </div>
  )
}

export default StepsTakenChart
