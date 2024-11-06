import { useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    //chart detaile
      // Chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],  // X-axis labels
    datasets: [
      {
        label: 'Monthly Sales',  // Label for the chart
        data: [12, 19, 3, 5, 2],  // Data for each month
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',  // Bar border color
        borderWidth: 1,  // Border width
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,  // Make the chart responsive
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',  // Title of the chart
      },
      legend: {
        position: 'top',  // Legend position
      },
    },
    scales: {
      y: {
        beginAtZero: true,  // Ensure y-axis starts from zero
      },
    },
  };
    return (
        <div className="container mx-auto">
            <h2>Bar Chart Example</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Statistics;