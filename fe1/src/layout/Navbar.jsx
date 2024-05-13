import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <Link to={"/"}>Home</Link>
      <Link to={"/basket"}>Basket</Link>
      <Link to={"/add"}>Add</Link>
      <Link to={"/adminPanel"}>Admin Panel</Link>
    </div>
  )
}

export default Navbar
