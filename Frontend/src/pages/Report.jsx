import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Relationships", "Addictions", "Trauma", "Life Transitions", "Self Esteem", "Spiritual Concerns"],
  datasets: [
    {
      label: "# of Votes",
      data: [5, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const Report = () => {
  return (
    <div className="flex w-full m-16">
        <div className="aspect-square w-1/2 border-4 border-sky-400 rounded-lg p-5">
            <Radar data={data} />
        </div>
    </div>
  )
};

export default Report;
