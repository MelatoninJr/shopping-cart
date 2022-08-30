import { BrowserRouter, Routes, Route, Link, Outlet, HashRouter } from "react-router-dom";
import React, { Component }  from 'react';
import { useState } from "react";
import App from "./App";
import Header from './components/header'
import Shop from './components/Shop'
import Home from './components/home'
import Checkout from './components/checkout'


const RouteSwitch = () => {

    const [products, setProducts] = useState([
        {name: 'Kawaii-Chocolate', id:'Kawaii-Chocolate', price: '$9.99', useprice: 10.00, switchvalue: false, quantity: 0, index: 0,totalprice: 0},
        {name: 'Pink-Boba', id:'Pink-Boba', price: '$9.99', useprice:10.00, switchvalue: false, quantity: 0, index: 1,totalprice: 0},
        {name: 'Sad-Green', id:'Sad-Green', price: '$9.99', useprice:10.00, switchvalue: false, quantity: 0, index: 2,totalprice: 0},
        {name: 'Yellow-Boba', id:'Yellow-Boba', price: '$9.99', useprice: 10.00, switchvalue: false, quantity: 0, index: 3,totalprice: 0},
        {name: 'Green-Boba', id:'Green-Boba', price: '$9.99', useprice: 10.00, switchvalue: false, quantity: 0, index: 4,totalprice: 0},
        {name: 'Brown-Boba', id:'Brown-Boba', price: '$7.99', useprice: 10.00, switchvalue: false, quantity: 0, index: 5,totalprice: 0},
        {name: 'White-Boba', id:'White-Boba', price: '$9.99', useprice: 10.00, switchvalue: false, quantity: 0, index: 6,totalprice: 0},
        {name: 'Mixed-Brown', id:'Mixed-Brown', price: '$9.99', useprice: 10.00, switchvalue: false, quantity: 0, index: 7,totalprice: 0},
        {name: 'Brown-Keychain', id:'Brown-Keychain', price: '$9.99', useprice: 5.00, switchvalue: false, quantity: 0, index: 8,totalprice: 0},

    ])

    const [shoppingArray, setShoppingArray] = useState([

    ])
    const [itemcounter, setItemCounter] = useState(0)
    const [shoppincart, setShoppingCart] = useState()
 



  return (
    <HashRouter basename='/'>
      <Routes>
      <Route path ='/'element={<Header />} >
      <Route path='' element={<Home cartdata={shoppingArray}  setcartdata={setShoppingArray}/>} ></Route>
      <Route path="shop" element={<Shop data={products} setdata={setProducts} itemcount={itemcounter} setitemcount={setItemCounter}  cartdata={shoppingArray}  setcartdata={setShoppingArray} />} /> 
      <Route path='checkout' element={<Checkout cartdata={shoppingArray}  setcartdata={setShoppingArray} />} ></Route>
      </Route>
      

  
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;