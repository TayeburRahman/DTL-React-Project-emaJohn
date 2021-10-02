import React from 'react';
import logo from '../images/logo.png'
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="HeaderLogo">
                <img className="logo" src={logo} alt="" width="22%" />
            </div>
            <div>
                <nav className="navMenu">
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/inventory">Manage Inventory here</a></nav>
            </div>
        </header>
    );
};

export default Header;