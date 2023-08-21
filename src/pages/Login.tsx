import React, { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("satmis10000");
  const [password, setPassword] = useState("Asdf1234#");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    localStorage.setItem("isLoggedIn", true.toString());
    navigate("/");
    setLoggedIn(true);
    try {
      const response = await login(username, password);
      if (response.error) {
        setError("Invalid credentials. Please try again.");
      } else {
        setLoggedIn(true);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
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
