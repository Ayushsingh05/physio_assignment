import React, { useContext, useEffect } from "react";
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
import html2canvas from "html2canvas";
import { appContext } from "../context/AppContext";
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
  const {setChartImage} :any = useContext(appContext)
  useEffect(() => {
    const generateChartImage = async () => {
      const chartContainer = document.getElementById("chart-container");
      if (chartContainer) {
        const chartImage = await html2canvas(chartContainer);
        const chartImageDataURL = chartImage.toDataURL("image/png");
        setChartImage(chartImageDataURL);
      }
    };

    generateChartImage();
  });

  return (
    <div className="main-container">
  <div className="small-chart-container" id="chart-container">
    <Line options={options} data={data} />
  </div>
</div>
  );
};

export default DashboardPage;
