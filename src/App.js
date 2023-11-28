import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
