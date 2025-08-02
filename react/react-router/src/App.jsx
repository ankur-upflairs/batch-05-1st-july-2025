import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={'404 ! page not found'} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
