import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {name, img, description, price } = service;
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className='card-img-top' src={img} alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price: {price} </p>
                <p className="card-text">{description}</p>
            </div>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary '>Join Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;