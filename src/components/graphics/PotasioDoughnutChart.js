import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const PotasioDoughnutChart = () => {
  const potasio = 188
  const remainingPotasio = 200 - potasio;

  // Creamos un objeto de datos con un solo valor
  const data = {
    datasets: [
      {
        data: [potasio, remainingPotasio],
        backgroundColor: ['#f97316', '#Fff'],
      },
    ],
    
  };

  return <Doughnut data={data} />
};

export default PotasioDoughnutChart;
