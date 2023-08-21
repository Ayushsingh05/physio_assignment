import React, { useState } from "react";
import DataService from "../services/api";
import { useNavigate } from "react-router-dom";
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("satmis10000");
  const [password, setPassword] = useState("Asdf1234#");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    DataService.login({ uid: username, password })
      .then((res) => {
       const {token} = res.data;
       localStorage.setItem("token", token);
       navigate("/");
      })
      .catch((e) => {
        setError(e.message)
      });
  };
  return (
    <div className="login-container">
      <>
        <div className="login-box">
          <h1 className="login-header">GraphFin Login</h1>
          <div className="input-group">
            <label className="input-label">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="center-button">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </>
    </div>
  );
};

export default LoginPage;
