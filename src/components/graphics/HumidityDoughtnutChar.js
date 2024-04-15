import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const HumidityDoughnutChart = () => {
  const humidity = 90
  const remainingHumidity = 100 - humidity;

  // Creamos un objeto de datos con un solo valor
  const data = {
    datasets: [
      {
        data: [humidity, remainingHumidity],
        backgroundColor: ['#36A2EB', '#Fff'],
      },
    ],
    
  };

  return <Doughnut data={data} />
};

export default HumidityDoughnutChart;
