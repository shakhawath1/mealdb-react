import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <a className='logo' href='/'>RANDHON-GHOR</a>
            <div className='menu'>
                <a href='/home'>Home</a>
                <a href='/foods'>Foods</a>
                <a href='/order'>Order</a>
                <a href='/about-us'>About us</a>
            </div>
        </nav>
    );
};

export default Header;