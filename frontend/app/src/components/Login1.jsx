import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:7000/login",
        { email: email, password }
        // { withCredentials: true }
      );
      console.log(res);
      if (res.status == 200) {
        localStorage.setItem("isLoggedIn", true);
        navigate("/home");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login1;
