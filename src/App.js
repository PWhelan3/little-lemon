import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import './App.css';
import React from 'react';
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <>
    <Header className="header"/>
    <Nav className="navbar"/>
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="booking" element={<BookingPage />} />
    </Routes>
    <Main className="main"/>
    <Footer className="footer"/>
    </>
  );
}

export default App;
