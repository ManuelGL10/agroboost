import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const NitrogenoDoughnutChart = ({datos}) => {
  const remainingNitrogeno = 200 - datos;

  // Creamos un objeto de datos con un solo valor
  const data = {
    datasets: [
      {
        data: [datos, remainingNitrogeno],
        backgroundColor: ['#ffbb1d', '#Fff'],
      },
    ],
    
  };

  return <Doughnut data={data} />
};

export default NitrogenoDoughnutChart;
