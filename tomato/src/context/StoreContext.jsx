import React, { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";       

export const StoreContext = React.createContext(null);

const StoreContextProvider = (props) => {

  const url = "http://localhost:4000";
   const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = React.useState({});
   const [token, setToken] = useState("");
       const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
     if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };



const getTotalCartAmount = () => {
  let totalAmount = 0;
  for(const item in cartItems) {
    if (cartItems[item] > 0){
      let itemInfo = food_list.find((food) => food._id === item);
      totalAmount += cartItems[item] * itemInfo.price;
    }
  }
  return totalAmount;
};


    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
    }
 const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
        setCartItems(response.data.cartData);
    }
   

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])





  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    setCartItems,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
