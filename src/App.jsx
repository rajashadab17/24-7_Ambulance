import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Footer.css";
import "./Responsive.css";
import FixedObjects from "./Components/FixedObjects";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Location from "./Components/Location";
import Ambulances from "./Components/Ambulances";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <FixedObjects />
        <Navbar />
        <ToastContainer position="top-right" autoClose={"2000"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/ambulances" element={<Ambulances />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
