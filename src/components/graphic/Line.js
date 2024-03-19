import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => (
  <div>
    <h2>Sales Performance</h2>
    <Line 
        data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }}
        options={{
            scales: {
                y: {
                    type: 'linear',
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: "Ventas"
                }
            }
        }}
    />
  </div>
);

export default LineChart;
