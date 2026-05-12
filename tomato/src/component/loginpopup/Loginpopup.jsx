import React, { useState, useEffect, useContext } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Loginpopup = ({setShowLogin}) => {

  const { url, setToken } = useContext(StoreContext)
  const [currState, setCurrentState] = useState('login')

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }
    useEffect(() => {
        console.log(data);
    }, [data])
     
   
    const onLogin = async (e) => {
        e.preventDefault()

        let new_url = url;
        if (currState === "Login") {
            new_url += "/api/user/login";
        }
        else {
            new_url += "/api/user/register"
        }
        const response = await axios.post(new_url, data);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            loadCartData({token:response.data.token})
            setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }
    }
      
    
      
  
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-title">
          <img src={assets.cross_icon} alt="close" onClick={() => setShowLogin(false)} />

          <h2>{currState === 'login' ? 'Login' : 'Sign Up'}</h2>
         
        </div>
        <div className="login-popup-inputs">
                {currState === "login" ?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
        </div>
        <button type="submit">{currState === 'login' ? 'Sign In' : 'Create Account'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree with the terms of use & privacy policy.</p>
        </div>
        <div className="login-popup-or">
        {currState === 'login' ? <p>Create a new account? <span onClick={()=>setCurrentState("sign up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrentState("login")}>Login here</span></p>}
       </div>
    


      </form>
    </div>
  )
}

export default Loginpopup
