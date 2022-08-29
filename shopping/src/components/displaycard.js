import React from "react";
import './displaycard.css'
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




const DisplayCard = (props) => {

    const {data, placement} = props
    let sourcer = ''

    if(data[placement].name === 'Kawaii-Chocolate') {
        sourcer = kawaiichocolate
    }
    if(data[placement].name === 'Pink-Boba') {
        sourcer = pinkboba
    }
    if(data[placement].name === 'Sad-Green') {
        sourcer = sadgreen
    }
    if(data[placement].name === 'Yellow-Boba') {
        sourcer = yellowboba
    }
    if(data[placement].name === 'Pink-Boba') {
        sourcer = pinkboba
    }
    if(data[placement].name === 'Green-Boba') {
        sourcer = greenboba
    }
    if(data[placement].name === 'Brown-Boba') {
        sourcer = brownboba
    }
    if(data[placement].name === 'White-Boba') {
        sourcer = whiteboba
    }
    if(data[placement].name === 'Mixed-Brown') {
        sourcer = mixedboba
    }
    if(data[placement].name === 'Brown-Keychain') {
        sourcer = brownkeychain
    }




    return(
        <div className="cardcontainer"  id={props.data[props.placement].name} onClick={props.click}    data-two={props.placement} >
            
            <img src={sourcer} data-two={props.placement}></img>
            <div className='info' data-two={props.placement}>
                <div className="name">{props.data[props.placement].name}</div>
                <div className="price">{props.data[props.placement].price}</div>
            </div>
        </div>

    )
}

export default DisplayCard;