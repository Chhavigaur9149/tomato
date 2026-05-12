import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, food_list, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <button
                    className="cart-item-button"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
                <hr></hr>
              </div>
            );
          }
        })}
      </div>
      <div className="total-payment">
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
        <button className="checkout-button" onClick={()=>navigate('/Placeorder')}>Proceed to Checkout</button>
         </div>
        <div className="right">
          <p>If you have a promo code, Enter it here</p>
            <div className="promo-code-input">
            <input type="text" placeholder="Enter Promo Code" />
            <button>submit</button>
            </div>
          
        </div>
     
    </div>
    </div>
  );
};

export default Cart;
