import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const FosforoDoughnutChart = ({datos}) => {
  const remainingFosforo = 50 - datos;

  // Creamos un objeto de datos con un solo valor
  const data = {
    datasets: [
      {
        data: [datos, remainingFosforo],
        backgroundColor: ['#20a752', '#Fff'],
      },
    ],
    
  };

  return <Doughnut data={data} />
};

export default FosforoDoughnutChart;
