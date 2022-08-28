import { render } from "@testing-library/react";
import React from "react";
import './Shop.css'
import Card from './displaycard'
import { useState } from "react";
import Popup from './popup'

const Shop = (props) => {

const [cardarray, setCardArray] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1])
const [popup, setPopup] = useState([])



const tester = () => {
    console.log(popup)
    setPopup([1])
    console.log(popup)


}



return (
    <div className="shopcontainer">
        <div className="header"></div>
        <div className="body">
        {cardarray.map((value, index) => (
                  
                  <div key={index} >{<Card data={props.data}  click={tester} />}</div>
                  ))}
            {popup.map((value, index) => (
                  
                  <div key={index} >{<Popup data={props.data} setdata={props.setdata} count={props.itemcount} setcount={props.setitemcount} />}</div>
                  ))}

        </div>
    </div>
)


}

export default Shop;