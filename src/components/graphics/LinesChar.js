import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

var beneficios = [0, 56, 20, 36, 80, 40, 30, 10, 25, 30, 12, 60];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            fill: true,
            borderColor: '#4379EE',
            backgroundColor: '#fff',
            pointRadius: 5,
            pointBorderColor: '#4379EE',
            pointBackgroundColor: '#4379EE',
        },
    ],
};

var misoptions = {
    scales: {
        y: {
            min: 0,
            ticks: { color: '#abb1ba' }
        },
        x: {
            ticks: { color: '#abb1ba' },
            grid: {display:false}
        },
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions} />
}
