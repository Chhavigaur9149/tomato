import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import {useContext} from 'react'


const FoodItem = ({image, name, description, price, id}) => {
  const { addToCart, removeFromCart, cartItems,url } = React.useContext(StoreContext)

  return (
    <div className='food-item' id='footer'>
        <div className="food-item-img-container">
            <img className="food-item-img" src={url+"/images/"+image} alt="" />
           {!cartItems[id]
           ?<img className="add"  onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className="add-count">
              <img className="remove" onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img className="add"  onClick={() => addToCart(id)}src={assets.add_icon_green} alt="" />
             
            </div>
           }
          
        </div>
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
      
        <p className='food-item-desc'>{description}</p>
          <p className='food-item-price'>${price}</p>
   
      
    </div>
  )
}

export default FoodItem
