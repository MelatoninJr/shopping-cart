import React from "react";
import './cartdisplaycard.css'
import brownboba from './bobaone.jpeg'
import pinkboba from './bobatwo.jpeg'
import yellowboba from './bobathree.jpg'
import greenboba from './bobafour.jpg'
import whiteboba from './bobafive.jpg'
import kawaiichocolate from './bobasix.jpg'
import mixedboba from './bobaseven.jpg'
import brownkeychain from './bobaeight.jpg'
import sadgreen from './bobanine.jpg'







const CartDisplay = (props) => {

const {cartdata, setcartdata, placement, data, setdata} = props
let sourcer = ''

if(cartdata[placement].name === 'Kawaii-Chocolate') {
    sourcer = kawaiichocolate
}
if(cartdata[placement].name === 'Pink-Boba') {
    sourcer = pinkboba
}
if(cartdata[placement].name === 'Sad-Green') {
    sourcer = sadgreen
}
if(cartdata[placement].name === 'Yellow-Boba') {
    sourcer = yellowboba
}
if(cartdata[placement].name === 'Pink-Boba') {
    sourcer = pinkboba
}
if(cartdata[placement].name === 'Green-Boba') {
    sourcer = greenboba
}
if(cartdata[placement].name === 'Brown-Boba') {
    sourcer = brownboba
}
if(cartdata[placement].name === 'White-Boba') {
    sourcer = whiteboba
}
if(cartdata[placement].name === 'Mixed-Brown') {
    sourcer = mixedboba
}
if(cartdata[placement].name === 'Brown-Keychain') {
    sourcer = brownkeychain
}

const incriment = (e) => {
    //console.log(cartdata[placement].indexOf())
    if(e.target.className === 'add-one') {

    
        setcartdata(current => {
            return  cartdata.map((value, index) => {
                if(cartdata[placement].name === cartdata[index].name) {

                  return {...value, quantity: (cartdata[placement].quantity + 1), totalprice: (cartdata[placement].quantity * cartdata[placement].useprice) + cartdata[placement].useprice}}
                  else {return {...value}}
             })
             return current
         })


//else {return {...value}}

        
    }
    if(e.target.className === 'sub-one' && cartdata[placement].quantity > 0) {

        setcartdata(current => {
            return  cartdata.map((value, index) => {
                if(cartdata[placement].name === cartdata[index].name) {

                  return {...value, quantity: (cartdata[placement].quantity - 1), totalprice: (cartdata[placement].quantity * cartdata[placement].useprice) - cartdata[placement].useprice}}
                  else {return {...value}}
             })
             return current
         })
        
    }
    
}



return (
    <div className="display-container">
        <div className="img-container">
            <img src={sourcer} className='display-image'></img>
        </div>
        <div className="info-container">
            <div className="name">{cartdata[placement].name}</div>
            <div className="total">
                <div>{cartdata[placement].totalprice}</div>
            </div>
            

            <div className="bottom-container">
                <div className="quantity"> {cartdata[placement].quantity}</div>
            <div className="button-container-one">
                <button type='button' className="add-one" onClick={incriment} >+</button>
                <button type='button' className="sub-one" onClick={incriment}>-</button>
            </div>
            </div>
        </div>
    </div>
)

}

export default CartDisplay