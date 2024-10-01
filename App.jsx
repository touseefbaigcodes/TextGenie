import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Txtutility from './Txtutility';
import NavBar from "./NavBar";
import "./Css.css";
import About from './AboutUs';
import ContactUs from './Contact';
import Services from './Services';
import { DarkModeProvider, DarkModeContext } from './Context';

const AppContent = () => {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode) {
      Object.keys(darkMode).forEach(key => {
        document.body.style[key] = darkMode[key];
      });
    }
  }, [darkMode]);

  return (
    <div id='app' >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Txtutility />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}
