import React from 'react';
import Nav from "./Nav.js"

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png" />
      <Nav />
    </div>
  );
}