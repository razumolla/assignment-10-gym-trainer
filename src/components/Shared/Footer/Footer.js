import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='container'>
            <div className='text-center fs-4 mt-5'>
                <p> <small>Copyright  &copy;  {year} All rights reserved || This Website is made by Razu Molla  </small> </p>
            </div>
        </footer>
    );
};

export default Footer;