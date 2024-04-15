import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const FosforoDoughnutChart = () => {
  const fosforo = 34
  const remainingFosforo = 50 - fosforo;

  // Creamos un objeto de datos con un solo valor
  const data = {
    datasets: [
      {
        data: [fosforo, remainingFosforo],
        backgroundColor: ['#20a752', '#Fff'],
      },
    ],
    
  };

  return <Doughnut data={data} />
};

export default FosforoDoughnutChart;
