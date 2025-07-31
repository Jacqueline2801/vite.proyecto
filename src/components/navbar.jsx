import React from "react";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <CartWidget />
    </nav>
  );
}