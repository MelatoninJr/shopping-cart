import { render } from "@testing-library/react";
import { Link } from 'react-router-dom'
import React from "react";
import './header.css'
import bobalogo from './bubble-tea.png'

const Header = (props) => {






return (
    <div className='headercontainer'>
        <div className='con-one'>
            <img className="boba-icon" src={bobalogo} ></img>
            <div className="business-name">Boba World</div>

            
        </div>
        <div className='con-two'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/shop'>Shop</a>
                </li>
                <li>
                    <a href='/checkout'>Checkout</a>
                </li>
            </ul>
        </div>

    </div>
)


}

export default Header;