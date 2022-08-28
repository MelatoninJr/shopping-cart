import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component }  from 'react';
import { useState } from "react";
import App from "./App";
import Header from './components/header'
import Shop from './components/Shop'

const RouteSwitch = () => {

    const [products, setProducts] = useState([
        {name: 'Brown-Boba', id:'Brown-Boba', price: '$7.99', useprice: 7.99, switch: false, quantity: 4, index: 0,totalprice: 0},
    ])
    const [itemcounter, setItemCounter] = useState(1)
    const [shoppincart, setShoppingCart] = useState()
 



  return (
    <BrowserRouter>
      <Routes>

      <Route path="/shop" element={<Shop data={products} setdata={setProducts} itemcount={itemcounter} setitemcount={setItemCounter} />} />      
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;