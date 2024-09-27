import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

var beneficios = [0, 56, 20, 36, 80, 40, 30, 10, 25, 30, 12, 60];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Crear un gradiente lineal para el fondo
var ctx = document.createElement('canvas').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#42B6F6'); // Inicio: #42B6F6
gradient.addColorStop(1, '#FFFFFF'); // Fin: blanco

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            fill: true,
            borderColor: '#4379EE',
            backgroundColor: gradient, // Usar el gradiente como color de fondo
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
