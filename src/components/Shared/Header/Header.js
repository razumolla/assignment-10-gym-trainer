import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className='logo-container'>
                GYM CENTER
            </div>

            <div className='link-container'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/home'> Home </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/services'>Services </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/about'> About </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/login'> Login </NavLink>
            </div>
        </nav>
    );
};

export default Header;