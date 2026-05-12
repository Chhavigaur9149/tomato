import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={assets.logo} alt="Logo" className="logo" />    
      <hr />
    </div>
  )
}

export default Navbar
