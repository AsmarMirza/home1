import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/basket"}>Basket</Link>
        </li>
        <li>
        
          <Link to={"/add"}>Add</Link>
        </li>
        <li>
          <Link to={"/adminPanel"}>Admin Panel</Link>
        </li>
        <li className="icon">
          <i className="fa-solid fa-bars"></i>
        </li>
       <ul className="dropDown">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/basket"}>Basket</Link></li>
        <li><Link to={"/add"}>Add</Link></li>
        <li><Link to={"/adminPanel"}>Admin Panel</Link></li>
       </ul>
      </ul>
    </nav>
  );
}

export default Navbar;
