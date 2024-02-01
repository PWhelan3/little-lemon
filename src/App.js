import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Router>
      <>
        <Header className="header" />
        <Nav className="navbar" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="booking"
            element={
              <Main>
                <BookingPage />
              </Main>
            }
          />
          <Route path="booking/confirmed" element={<ConfirmedBooking />} /> {/* New route for confirmation page */}
        </Routes>

        <Footer className="footer" />
      </>
    </Router>
  );
}

export default App;