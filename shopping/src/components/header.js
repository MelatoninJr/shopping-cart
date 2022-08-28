import { render } from "@testing-library/react";
import { Link } from 'react-router-dom'
import React from "react";
import './header.css'

const Header = (props) => {






return (
    <div className='headercontainer'>
        <div className='con-one'>
            Business
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
                    <a href='/'>Checkout</a>
                </li>
            </ul>
        </div>

    </div>
)


}

export default Header;