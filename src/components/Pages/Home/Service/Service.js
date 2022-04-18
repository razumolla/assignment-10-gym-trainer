import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className='card-img-top' src={img} alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price: {price} </p>
                <p className="card-text">{description}</p>
                <button className='btn btn-primary'>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;