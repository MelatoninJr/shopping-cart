import React from "react";
import './checkout.css'
import { useState } from "react";
import DisplayCard from './cartdisplaycard'
const Checkout = (props) => {




return(
    <div className="page-container">
        <div className="shopping-container">
            <div className="heading">Shopping</div>
            {props.cartdata.map((value, index) => (
                  
                  <div key={index} >{<DisplayCard cartdata={props.cartdata} setcartdata={props.setcartdata} placement={index} />}</div>
                  ))}
        </div>
        
    </div> 
)


}

export default Checkout;