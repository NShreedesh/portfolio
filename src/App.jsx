import React from "react";
import "./app.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Project from "./pages/project/Project";
import Skills from "./pages/skills/Skills";
import Work from "./pages/work/Work";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={'/portfolio'}/>}/>
          <Route path="/portfolio" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
