import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [72, 56, 20, 36, 80, 40, 30, 10, 25, 30, 12, 60];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var misoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            ticks: { color: '#abb1ba' }
        },
        x: {
            ticks: { color: '#abb1ba' },
            grid: { display: false }
        }
    }
};

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            backgroundColor: '#8280FF'
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} className='w-full' />
}