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
    <div className='h-screen w-screen bg-[url("../public/images/bg-image.jpg")] p-4 text-white'>
      <Navbar />
      <div className="flex max-w-screen-xl items-center justify-between mx-auto mt-8 px-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
