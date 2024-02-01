import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;