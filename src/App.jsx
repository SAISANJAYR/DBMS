import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import DriverDashboard from "./pages/DriverDashboard";


import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/driver" element={<DriverDashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
