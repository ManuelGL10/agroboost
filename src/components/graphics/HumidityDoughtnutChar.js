import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const HumidityDoughnutChart = ({datos}) => {
  const remainingHumidity = 100 - datos;

  // Creamos un objeto de datos con un solo valor
  const data = {
    datasets: [
      {
        data: [datos, remainingHumidity],
        backgroundColor: ['#36A2EB', '#Fff'],
      },
    ],
    
  };

  return <Doughnut data={data} />
};

export default HumidityDoughnutChart;
