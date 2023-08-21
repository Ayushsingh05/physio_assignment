import React, { useContext, useEffect, useMemo } from "react";
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
import DataService from "../services/api";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const toast = useToast();
  const { setChartImage }: any = useContext(appContext);
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
  useEffect(() => {
    DataService.getDashboardAccess(token)
      .then((res) => {
        const result = res.data;
        toast({
          title: "Login Successfully",
          description: result.message,
          status: "success",
          duration: 500,
          isClosable: true,
          position: "top",
        });
      })
      .catch((e) => {
        toast({
          title: "Unauthorized User!",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      });
  }, []);

  return (
    <div className="main-container">
      <div className="small-chart-container" id="chart-container">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default DashboardPage;
