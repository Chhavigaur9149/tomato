import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState('home')
  const navigate = useNavigate()
  const {token, setToken} = useContext(StoreContext);
  const logOut = () => {
    setToken("")
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div className='navbar'>
      <img  className="logo" src={assets.logo} alt="Tomato Logo"/>

      <ul className='nav-menu'>
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile-app</a>
        <a href='#contact' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact us</a>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="Search Icon"/>
        <div className="navbar-search-icon">
          <NavLink to='/cart'><img src={assets.basket_icon} alt="Basket Icon"/></NavLink>
       
        </div>
      
         
          
  {!token ? <button  className="login-btn" onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logOut}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }

      
    </div>
    </div>  
  )
}

export default Navbar
