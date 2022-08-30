import React from "react";
import './popup.css'
import brownboba from './bobaone.jpeg'
import { useState } from "react";
import pinkboba from './bobatwo.jpeg'
import yellowboba from './bobathree.jpg'
import greenboba from './bobafour.jpg'
import whiteboba from './bobafive.jpg'
import kawaiichocolate from './bobasix.jpg'
import mixedboba from './bobaseven.jpg'
import brownkeychain from './bobaeight.jpg'
import sadgreen from './bobanine.jpg'
import cancel from './cancel.png'
import { v4 as uuidv4 } from 'uuid';







const Popup = (props) => {

    const {data, dataset, count, datatwo, cartdata, setcartdata} = props
    let sourcer = ''

    if(data[datatwo].index === datatwo) {
        sourcer = kawaiichocolate
    }
    if(data[datatwo].name === 'Pink-Boba') {
        sourcer = pinkboba
    }
    if(data[datatwo].name === 'Sad-Green') {
        sourcer = sadgreen
    }
    if(data[datatwo].name === 'Yellow-Boba') {
        sourcer = yellowboba
    }
    if(data[datatwo].name === 'Pink-Boba') {
        sourcer = pinkboba
    }
    if(data[datatwo].name === 'Green-Boba') {
        sourcer = greenboba
    }
    if(data[datatwo].name === 'Brown-Boba') {
        sourcer = brownboba
    }
    if(data[datatwo].name === 'White-Boba') {
        sourcer = whiteboba
    }
    if(data[datatwo].name === 'Mixed-Brown') {
        sourcer = mixedboba
    }
    if(data[datatwo].name === 'Brown-Keychain') {
        sourcer = brownkeychain
    }


    const incriment = (e) => {
        let holderone = ''
        let holdertwo = ''
        if(e.target.className === 'add') {


            props.setcount(props.count + 1)
            props.setdata(current => {
                return  props.data.map((value, index) => {
                    console.log(datatwo, index)
                    if(datatwo === data[index].index) {
                        return {...value, quantity: (data[datatwo].quantity + 1), totalprice: (data[datatwo].quantity * data[datatwo].useprice) + data[datatwo].useprice}


                    }
                    else {return {...value}}
                 })
                 return current

             })


            
        }
        if(e.target.className === 'sub' && props.count > 0) {
            props.setcount(props.count - 1)
            props.setdata(current => {
                return  props.data.map((value, index) => {
                    if(datatwo === index) {
                        return {...value, quantity: (data[datatwo].quantity - 1), totalprice: (data[datatwo].quantity * data[datatwo].useprice) - data[0].useprice}  
                    }
                    else {return{...value}}
                                   })
                 return current
             })
            
        }
        
    }

    const buttonclick = (e) => {
        
                let holder = data[datatwo]
                let holdertwo = uuidv4()

                props.setcartdata(current => {
   
               return  [...current, holder ]
                
         })
         props.setcount(0)
         


            props.setdata(current => {
                return  props.data.map((value, index) => {
                    if(datatwo === index) {
                        return {...value, quantity: 0, totalprice: 0}  
                    }
                    else {return{...value}}
                                   })
                 return current
             })
            
        
        props.setpoparray([])
        

    }

    const buttonclicktwo = (e) => {
        props.setpoparray([])
    }


    return(
        <div className="pop-container">
            <div className="container-two">
                <div className="small-one">
                    <img src={sourcer} id='pic' ></img>
                </div>
                <div className="small-two">
                <div className="small-three">
                    <div className='list-title'>{props.data[datatwo].name}</div>
                    <div>{props.data[datatwo].totalprice} </div>
                    <div className="click-container">
                        <button className="sub" onClick={incriment} >-</button>
                        <div className="number">{count}</div>
                        <button className="add" onClick={incriment} >+</button>
                    </div>
                    <button type='button' className="cart-button" onClick={buttonclick} id={props.data[datatwo].name} >Add Cart</button>
                </div>

                </div>
                <div className="button-holder">
                <svg onClick={buttonclicktwo} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15" ><path d="M4.5 4.5l6 6m-6 0l6-6m-3 10a7 7 0 110-14 7 7 0 010 14z" stroke="currentColor" class='close'></path></svg>
                </div>

            </div>
        </div>
    )
}

export default Popup;