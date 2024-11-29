import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login1 from "./components/Login1";
import Home from "./components/Home";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login1 />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
