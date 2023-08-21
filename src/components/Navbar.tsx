import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../services/api";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFChart } from "./PDFChart";
import { appContext } from "../context/AppContext";
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleLogout = () => {
    logout();
  };
  const { chartImage }: any = useContext(appContext);
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
                  {chartImage && (
                    <PDFDownloadLink
                      className="nav-links "
                      document={<PDFChart chartImageDataURL={chartImage} />}
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
