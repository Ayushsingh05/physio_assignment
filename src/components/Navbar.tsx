import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../services/api";
import { PDFDownloadLink } from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import { PDFChart } from "./PDFChart";
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleLogout = () => {
    logout();
  };
  const [chartImageDataURL, setChartImageDataURL] = useState("");

  useEffect(() => {
    const generateChartImage = async () => {
      const chartContainer = document.getElementById("chart-container");
      if (chartContainer) {
        const chartImage = await html2canvas(chartContainer);
        const chartImageDataURL = chartImage.toDataURL("image/png");
        setChartImageDataURL(chartImageDataURL);
      }
    };

    generateChartImage();
  }, []);

  return (
    <>
      <nav className="b">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            GraphFin
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <div className="nav-links nav-chart" onClick={handleClick}>
                <div>
                  {chartImageDataURL && (
                    <PDFDownloadLink
                      className="nav-links "
                      document={
                        <PDFChart chartImageDataURL={chartImageDataURL} />
                      }
                      fileName="chart.pdf"
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download PDF"
                      }
                    </PDFDownloadLink>
                  )}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-links" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
