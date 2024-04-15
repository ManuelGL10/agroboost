import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const PotasioDoughnutChart = ({datos}) => {
  const remainingPotasio = 200 - datos;

  // Creamos un objeto de datos con un solo valor
  const data = {
    datasets: [
      {
        data: [datos, remainingPotasio],
        backgroundColor: ['#f97316', '#Fff'],
      },
    ],
    
  };

  return <Doughnut data={data} />
};

export default PotasioDoughnutChart;
