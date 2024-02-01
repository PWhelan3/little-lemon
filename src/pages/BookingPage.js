
import React from 'react';
import Nav from "../components/Nav.js";
import BookingForm from "../components/BookingForm";



export default function BookingPage() {
    return (
      <div className="bookingpage">
        <Nav />
        <BookingForm />
      </div>
    );
  }