import React from "react";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Component/Common/Header";
import Projects from "./Component/Projects";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Common/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
