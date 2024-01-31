import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import './App.css';
import React from 'react';

function App() {
  return (
    <>
    <Header className="header"/>
    <Nav className="navbar"/>
    <Main className="main"/>
    <Footer className="footer"/>
    </>
  );
}

export default App;
