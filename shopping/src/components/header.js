import { render } from "@testing-library/react";
import { Link, Outlet } from 'react-router-dom'
import React from "react";
import './header.css'
import bobalogo from './bubble-tea.png'

const Header = (props) => {






return (
    <div>
    <div className='headercontainer'>
        <div className='con-one'>
            <img className="boba-icon" src={bobalogo} ></img>
            <div className="business-name">Boba World</div>

            
        </div>
        <div className='con-two'>
            <ul>
                <Link to='/home'>
                Home
                </Link>
                <Link to='/shop'>
                Shop
                </Link>
                <Link to='/checkout'>
                Checkout
                </Link>
            </ul>
        </div>

    </div>
    <Outlet />
    </div>


)


}

export default Header;