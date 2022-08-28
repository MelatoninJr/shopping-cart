import React from "react";
import './popup.css'
import bobaone from './bobaone.jpeg'

const Popup = (props) => {

    const incriment = (e) => {
        if(e.target.className === 'add') {
            props.setcount(props.count + 1)
            



            props.setdata(current => {
               return  props.data.map((value, index) => {
 
                     return {...value, totalprice: (props.data[index].useprice * props.data[index].quantity)}
                })
                return current
            })

            

            /*let totalamount = (props.data[0].useprice * props.data[0].quantity)
            props.setdata({...props.data, totalprice: totalamount})*/
            return
        }
        if(e.target.className === 'sub' && props.count > 0) {
            props.setcount(props.count - 1)
            return
        }

        
    }

    return(
        <div className="pop-container">
            <div className="container-two">
                <div className="small-one">
                    <img src={bobaone} id='pic' ></img>
                </div>
                <div className="small-two">
                <div className="small-three">
                    <div className='list-title'>{props.data[0].name}</div>
                    <div>{props.data[0].totalprice} </div>
                    <div className="click-container">
                        <button className="sub" onClick={incriment} >-</button>
                        <div className="number">{props.count}</div>
                        <button className="add" onClick={incriment} >+</button>
                    </div>
                    <button type='button' className="cart-button">Add Cart</button>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Popup;