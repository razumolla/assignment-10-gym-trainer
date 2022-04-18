import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='footer-section'>
            <div className='container  text-center mt-5 p-3'>
                <p> Copyright  &copy;  {year} All rights reserved </p>
                <p> This Website is made by Razu Molla </p>
            </div>
        </footer>
    );
};

export default Footer;