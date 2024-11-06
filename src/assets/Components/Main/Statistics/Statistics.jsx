import { useEffect, useContext } from "react";
import { Bar } from 'react-chartjs-2';
import { myContext } from "../../../../App";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    const { Gadgets } = useContext(myContext);

    // Function to extract labels and prices
    const extractChartData = (gadgets) => {
        return {
            labels: gadgets.map(product => product.name),
            prices: gadgets.map(product => product.price), 
        };
    };

    const { labels, prices } = extractChartData(Gadgets);

    // Chart data
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Product Prices',
                data: prices,
                backgroundColor: 'rgb(168, 85, 247)',
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Product Prices Chart',
            },
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="container mx-auto">
            <div className="text-center bg-purple-500 text-white p-3 rounded-lg">
                <h1 className="text-3xl font-bold">Statistics Bar Chart</h1>
                <p className="mt-3 text-slate-100 w-[60%] mx-auto">
                    A smart gadget purchase involves buying advanced electronic devices designed to simplify and enhance daily tasks through automation, connectivity, and intelligent features.
                </p>
            </div>
            <h2 className="text-2xl font-bold mt-8">Statistics</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Statistics;
