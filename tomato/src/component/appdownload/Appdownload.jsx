import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='appdownload' id='app-download'>
        <h2>For Better Experience Download <br/>Tomato App</h2>
       <div className='image'> <img src={assets.play_store} alt="Play Store Icon"/>
        <img src={assets.app_store} alt="App Store Icon"/>
        </div>
       
     
      
    </div>
  )
}

export default Appdownload
