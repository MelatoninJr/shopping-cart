import React from "react";
import './displaycard.css'
import bobaone from './bobaone.jpeg'



const DisplayCard = (props) => {



    return(
        <div className="cardcontainer"  id={props.data[0].name} onClick={props.click}>
            
            <img src={bobaone}></img>
            <div className='info'>
                <div className="name">{props.data[0].name}</div>
                <div className="price">{props.data[0].price}</div>
            </div>
        </div>

    )
}

export default DisplayCard;