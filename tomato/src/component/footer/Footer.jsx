import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='contact' >
        <div className="footer-content" >
            <div className="footer-left">
                <img src={assets.logo} alt="Tomato Logo"/>
                <p>We are here to serve you the best food in town. We have a wide range of food items to choose from.Explore a wide variety of tasty dishes and order your favorites in just a few taps. </p>
                 <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="Facebook Icon"/>
                <img src={assets.twitter_icon} alt="Twitter Icon"/>
                <img src={assets.linkedin_icon} alt="LinkedIn Icon"/>
            </div>
            </div>
            <div className="footer-content-center" >
                <h2>COMPANY</h2>
                <ul>
                 <li>Home</li>  
                 <li>About-us</li> 
                 <li>Delivery</li>
                 <ul>Privacy-Policy</ul>
                </ul>

            </div>
            <div className="footer-content-right">
            <h2>Get-In-Touch</h2>
            <ul>
                <li>+91 9149005328</li>
                <li>contact@tomato.com</li>
            </ul>
            </div>
           


        </div>
        <hr/> 
        <div className="footer-copy-right">
            <p>Copyright 2024 © Tomato.com - All Right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
