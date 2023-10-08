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

export const RadarData = {
  labels: [
    "Relationships",
    "Addictions",
    "Trauma",
    "Life Transitions",
    "Self Esteem",
    "Spiritual Concerns",
  ],
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

const RadarGraph = () => {
  return (
    <>
      <Radar data={RadarData} />
    </>
  );
};

export default RadarGraph;
