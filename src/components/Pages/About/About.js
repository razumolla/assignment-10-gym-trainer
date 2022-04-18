import React from 'react';
import razu from '../../../images/razu.jpg'
const About = () => {
    return (
        <div className='container mt-3 ' style={{ height: '65vh' }} >
            <div className='text-center mb-2'>
                <img height={200} className='rounded-pill' src={razu} alt="" />
            </div>
            <p>
                Hi! I am Razu, a web developer focused on crafting great web experiences. Coding have been my passion since the days I started working with computers but I found myself in web development in 2022. I enjoy creating beautifully designed and development, intuitive and functional websites.
            </p>
            <p>
                My future plan is to be a MERN stack web developer and to be good at DSA and Problem-solving.
            </p>
        </div>
    );
};

export default About;