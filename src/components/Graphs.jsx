import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Graphs = () => {
    const data1 = {
        labels: ['0–1 YRS', '1–3 YRS', '3–5 YRS', '5–8 YRS', '8–10 YRS', '10+ YRS'],
        datasets: [
            {
                data: [9, 47, 25, 12, 5, 2],
                backgroundColor: 'white',
                borderWidth: 0,
                barThickness: 50,
            },
        ],
    };

    const data2 = {
        labels: ['GENERALISTS', 'MARKETING', 'SALES/BIZ DEV', 'ENTREPRENEURS', 'ENGINEERING', 'FINANCE', 'PRODUCT'],
        datasets: [
            {
                data: [2, 5, 12, 25, 47, 9],
                backgroundColor: 'white',
                borderWidth: 0,
                barThickness: 50,
                barPercentage: 0.8,
                categoryPercentage: 0.5,
            },
        ],
    };

    const options = {
        indexAxis: 'x',
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: '#000',
                    font: {
                        family: 'Arial',
                        size: 8,
                    },
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                display: false,
            },
        },
        layout: {
            padding: {
                top: 20,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            datalabels: {
                color: '#000',
                anchor: 'end',
                align: 'end',
                font: {
                    family: 'Arial',
                    weight: 'bold',
                    size: 12,
                },
                formatter: (value) => `${value}%`,
            },
        },
    };

    return (
        <>
            <div className="flex justify-center p-5 bg-[#f3e3c4]">
                <div className="w-[400px] mr-5">
                    <h3 className="text-center font-bold text-black mb-4">
                        With folks across all years of experience
                    </h3>
                    <Bar data={data1} options={options} />
                </div>
                <div className="w-[400px]">
                    <h3 className="text-center font-bold text-black mb-4">
                        And from various backgrounds
                    </h3>
                    <Bar data={data2} options={options} />
                </div>

            </div>
            <div class="w-4/5 mx-auto">
                <div class="h-1 bg-black"></div>
            </div>
        </>

    );
};

export default Graphs;
