import React from 'react';
import { Bar } from 'react-chartjs-2';

const TemperatureBarChart = () => {
  const temperature = 36; 
  const data = {
    labels: ['Temperatura'],
    datasets: [
      {
        data: [temperature],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data}/>;
};

export default TemperatureBarChart;
