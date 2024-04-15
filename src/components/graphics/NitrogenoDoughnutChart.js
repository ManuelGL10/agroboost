import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const NitrogenoDoughnutChart = () => {
  const nitrogeno = 167
  const remainingNitrogeno = 200 - nitrogeno;

  // Creamos un objeto de datos con un solo valor
  const data = {
    datasets: [
      {
        data: [nitrogeno, remainingNitrogeno],
        backgroundColor: ['#ffbb1d', '#Fff'],
      },
    ],
    
  };

  return <Doughnut data={data} />
};

export default NitrogenoDoughnutChart;
