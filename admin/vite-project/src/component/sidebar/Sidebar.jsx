import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>

        <div className="sidebar-options">
            <NavLink to="/add" className="sidebar-option">
            <img src={assets.add_icon} alt="Add" />
            <p>Add items</p>
            </NavLink>
            </div>
        <div className="sidebar-options">
            <NavLink to="/list" className="sidebar-option">
            <img src={assets.order_icon} alt="List" />
            <p>List items</p>
            </NavLink>
            </div>   

        <div className="sidebar-options">
            <NavLink to="/orders" className="sidebar-option">
            <img src={assets.order_icon} alt="Order" />
            <p>Orders</p>
            </NavLink>
            </div>  
           
      
    </div>
  )
}

export default Sidebar
