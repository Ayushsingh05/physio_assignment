import React from "react";
import { Line } from "react-chartjs-2";
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
import { data, options } from "../config/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardPage: React.FC = () => {




  return (
    <div className="main-container">
  <div className="small-chart-container" id="chart-container">
    <Line options={options} data={data} />
  </div>
</div>
  );
};

export default DashboardPage;
