import React from 'react'
import { assets } from '../../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${assets.header_img})` }}>
        <div className="header-contents">
        <h2>Order Your Favourite Food Hire</h2>
        <p>We are here to serve you the best food in town. We have a wide range of food items to choose from. We are here to serve you the best food in town. We have a wide range of food items to choose from.</p>
        <button >View Menu</button>
      </div>
    </div>
  )
}

export default Header
