import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };


    return (
        <nav className='sticky-top '>
            <div className='logo-container'>
                ZACSON
            </div>

            <div className='link-container'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/home'> Home </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/services'>Services </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>Blogs </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/about'> About </NavLink>
                {user ?
                    <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                    :
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/signin'> Sign In </NavLink>
                }
            </div>
        </nav>
    );
};

export default Header;