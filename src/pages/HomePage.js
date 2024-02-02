import React from 'react';
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import Specials from "../components/Specials.js";
import Reviews from "../components/Reviews.js";
import Chicago from "../components/Chicago.js";
import Footer from "../components/Footer.js";

export default function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Specials />
      <Reviews />
      <Chicago />
      <Footer />
    </div>
  );
}