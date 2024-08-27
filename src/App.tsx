import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
