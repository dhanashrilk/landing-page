import React from "react";
import "./App.css";
import TopPart from "./components/TopPart.jsx";
import Navbar from "./components/Navbar.jsx";
import SecondSection from "./components/SecondSection.jsx";
import ThirdSection from "./components/ThirdSection.jsx";
import FourthSection from "./components/FourthSection.jsx";
import FifthSection from "./components/FifthSection.jsx";
import SixthSection from "./components/SixthSection.jsx";
import SeventSection from "./components/SeventSection.jsx";
import EightthSection from "./components/eightthSection.jsx";
import NinethSection from "./components/NinethSection.jsx";
import CarouselSection from "./components/CarouselSection.jsx";
import LastSection from "./components/LastSection.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/DB.jsx";
import Login from "./components/Login.jsx";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
      <TopPart />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventSection />
      <EightthSection />
      <NinethSection />
      <CarouselSection />
      <LastSection />
      <Footer />
    </div>
  );
}

export default App;
