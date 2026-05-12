import React, { useState, useEffect, useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Placeorder = () => {

    const{ getTotalCartAmount,token,cartItems,url,food_list, setCartItems } = useContext(StoreContext);
    const navigate = useNavigate();
    const deliveryCharge = 2;

   const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

     
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    useEffect(() => { 
      console.log(data);
    }, [data])  


        const placeOrder = async (e) => {
        e.preventDefault()
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo)
            }
        })
      let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + deliveryCharge,
        }
         let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            }
            else {
                alert("Something Went Wrong")
            }
      }



  return (
    <div className="details">
      <form onSubmit={placeOrder} className="placeorder-form">
                   <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-field">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' required />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required />
                </div>
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' required />
                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' required />
                <div className="multi-field">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' required />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' required />
                </div>
                <div className="multi-field">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' required />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' required />
                </div>
                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' required />
            </div>

        <div className="right-order-detail">
          <div className="cart-payment">
            <h1>Cart Totals</h1>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>₹{2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Total</p>
              <p>₹{getTotalCartAmount() + 2}</p>
            </div>
            <button type="submit" className="checkout-button">Proceed to payment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Placeorder;
