import React from "react";
import CartWidget from "./CartWidget";
// src/components/NavBar.jsx
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
    </nav>
  );
}

export default NavBar;