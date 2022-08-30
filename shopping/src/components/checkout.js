import React from "react";
import './checkout.css'
import { useState, useEffect } from "react";
import DisplayCard from './cartdisplaycard'
const Checkout = (props) => {

const checkoutfunc = (e => {
    alert('Congrats you checked out!')
    props.setcartdata([])
})
const [totaldisplay, setTotalDisplay] = useState()
const totalvalue = (e) => {
    let sum = 0
    props.cartdata.map((value, index) => {
        sum = (sum + props.cartdata[index].totalprice)
    })
    setTotalDisplay(sum)

}

useEffect(() => {
    totalvalue()
  });

return(
    <div className="page-container">
        <div className="shopping-container">
            <div className="heading">Shopping</div>
            {props.cartdata.map((value, index) => (
                  
                  <div key={index} >{<DisplayCard cartdata={props.cartdata} setcartdata={props.setcartdata} placement={index} />}</div>
                  ))}
            <div className="lower-container">
                <div className="total-holder">Total - ${totaldisplay}</div>
                <button type='button' className="submit-button" onClick={checkoutfunc} >Checkout</button>
            </div>
        </div>
        
    </div> 
)


}

export default Checkout;