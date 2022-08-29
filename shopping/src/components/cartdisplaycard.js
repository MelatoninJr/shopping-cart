import React from "react";
import './cartdisplaycard.css'
import brownboba from './bobaone.jpeg'

const CartDisplay = (props) => {

const {cartdata, setcartdata, placement, data, setdata} = props
/*
const incriment = (e) => {
    if(e.target.className === 'add-one') {

    
        setdata(current => {
            return  data.map((value, index) => {

                  return {...value, quantity: (data[0].quantity + 1), totalprice: (data[0].quantity * data[0].useprice) + data[0].useprice}
             })
             return current
         })




        
    }
    if(e.target.className === 'sub-one' && data[0].quantity > 0) {

        setdata(current => {
            return  data.map((value, index) => {

                  return {...value, quantity: (data[0].quantity - 1), totalprice: (data[0].quantity * data[0].useprice) - data[0].useprice}
             })
             return current
         })
        
    }
    
}*/
const incriment = () => {
    
}

return (
    <div className="display-container">
        <div className="img-container">
            <img src={brownboba} className='display-image'></img>
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