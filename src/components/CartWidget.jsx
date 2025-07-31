import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

function CartWidget () {
  return (
    <Button as= {Link} to= {"/about"}> Cart 
      🛒3
    </Button>
  );
};
export default CartWidget;
