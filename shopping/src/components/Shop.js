import { render } from "@testing-library/react";
import React from "react";
import './Shop.css'
import Card from './displaycard'
import { useState } from "react";
import Popup from './popup'
import Header from './header'
const Shop = (props) => {

const [cardarray, setCardArray] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1])
const [popup, setPopup] = useState([])
const [datasetter, setDataSetter] = useState()

let selectid = ''
let eventattrib = ''
const tester = (e) => {
    setPopup([1])
    eventattrib = Number(e.target.getAttribute('data-two'))
    setDataSetter(eventattrib)
}



return (
    
    <div className="shopcontainer">
        <div className="header"></div>
        <div className="body">
        {cardarray.map((value, index) => (
                  
                  <div key={index} >{<Card data={props.data}  click={tester} placement={index}  />}</div>
                  ))}
            {popup.map((value, index) => (
                  
                  <div key={index} >{<Popup data={props.data} setdata={props.setdata} count={props.itemcount} setcount={props.setitemcount} datatwo={datasetter} cartdata={props.cartdata} setcartdata={props.setcartdata}   setpoparray={setPopup} />}</div>
                  ))}

        </div>
    </div>
)


}

export default Shop;