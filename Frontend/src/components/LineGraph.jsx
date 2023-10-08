import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Usage of Journal",
    },
  },
};

const labels = ["January", "February", "March", "April", "May"];

// Function to generate random data values
const generateRandomData = () => {
  const randomData = labels.map(() => Math.floor(Math.random() * 2000) - 1000);
  console.log(randomData); // Print the generated data values to the console
  return randomData;
};

export const data = {
  labels,
  datasets: [
    {
      label: "Monthly Usuage",
      data: generateRandomData(),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function LineGraph() {
  return (
    <div className="md:w-full lg:w-3/5 flex justify-center items-center">
      <Line options={options} data={data} />
    </div>
  );
}

export default LineGraph;
