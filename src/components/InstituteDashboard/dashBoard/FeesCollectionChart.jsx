import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from 'chart.js';
import Select from '../../custom/Select';

// Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

// Function to create a striped pattern
const createStripePattern = (ctx, color) => {
    const patternCanvas = document.createElement('canvas');
    const size = 30;
    patternCanvas.width = size;
    patternCanvas.height = size;
    const patternCtx = patternCanvas.getContext('2d');

    patternCtx.fillStyle = color;
    patternCtx.fillRect(0, 0, size, size);

    patternCtx.strokeStyle = '#fff';
    patternCtx.lineWidth = 0.5;
    patternCtx.moveTo(0, 0);
    patternCtx.lineTo(size, size);
    patternCtx.stroke();

    return ctx.createPattern(patternCanvas, 'repeat');
};

const chartData = {
    'This Week': [10000, 20000, 15000, 13000, 22000, 5000, 3000],
    'Last Week': [15000, 25000, 20000, 19000, 27000, 12000, 8000],
    'This Month': [20000, 40000, 35000, 31520, 50000, 15000, 5000]
};

// Configuration for the chart (legend and title removed)
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
            backgroundColor: '#0A2E80',
            titleColor: '#fff',
            bodyColor: '#fff',
            displayColors: false,
            yAlign: 'bottom',
            xAlign: 'center',
            padding: 10,
            caretSize: 10,
            cornerRadius: 8,
            callbacks: {
                title: () => '',
                label: function (context) {
                    return `₹${context.raw.toLocaleString()}`;
                },
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            ticks: {
                callback: function (value) {
                    return `₹${(value / 1000).toFixed(0)}k`;
                },
            },
        },
    },
};

const ChartOptions = [
    { value: 'This Week', label: 'This Week' },
    { value: 'Last Week', label: 'Last Week' },
    { value: 'This Month', label: 'This Month' },
];


// Main component with filter and chart
const FeesCollectionChart = () => {
    const [filter, setFilter] = useState('');

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: chartData[filter],
                backgroundColor: (context) => {
                    const chartCtx = context.chart.ctx;
                    return createStripePattern(chartCtx, '#3573F9');
                },
                borderWidth: 2,
                barPercentage: 0.48,
                borderRadius: 8,
            },
        ],
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="paragraph font-semibold">Fees Collection</h1>
                <Select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mb-4"
                >
                    {ChartOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
            </div>
            <div style={{ width: '100%', height: '400px' }}>
                <Bar data={data} options={options} />
            </div>
        </>
    );
};

export default FeesCollectionChart;
