import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    labels: ['Completada', 'Pendiente', 'Cancelada'],
    datasets: [
        {
            label: 'Venta',
            data: [35, 20, 20],
            backgroundColor: [
                '#4AD991',
                '#FEC53D',
                '#EF4444',
            ]
        },
    ],
};

export default function Pies() {
    return (
        <Pie data={data} options={options} className='w-full h-full' />
    );
}
