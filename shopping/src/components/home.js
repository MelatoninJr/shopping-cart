import React from "react";
import './home.css'
import homebackground from './background.png'


const Home = (props) => {

    const {cartdata, setcartdata} = props

    return(
        <div className="home-container">
            <div className='background-container'>
                <img className="background" src={homebackground}></img>
            </div>

        </div>
    )
}

export default Home; 