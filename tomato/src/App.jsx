import React from "react";
import Navbar from "./component/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home.jsx";
import Cart from "./pages/Cart.jsx";

import Placeorder from "./component/placeorder/Placeorder.jsx";

import Loginpopup from "./component/loginpopup/Loginpopup.jsx";
import Exploremenu from "./component/exploremenu/Exploremenu.jsx";
import { useState } from "react";
import FoodDisplay from "./component/fooddisplay/FoodDisplay.jsx";

import Footer from "./component/footer/Footer.jsx";
import Appdownload from "./component/appdownload/Appdownload.jsx";
import Header from "./component/header/Header.jsx";
import Verify from "./pages/verify/Verify.jsx"
import MyOrders from "./pages/myorders/MyOrders.jsx";



const App = () => {
  const [category, setCategory] = useState("All");

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>

      {showLogin ? <Loginpopup  setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Exploremenu setCategory={setCategory} />
              <FoodDisplay category={category} />
              <Appdownload />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>

  
      </div>
      <Footer />
    </>
  );
};

export default App;
