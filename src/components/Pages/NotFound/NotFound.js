import React from 'react';

const NotFound = () => {
    return (
        <div className='container text-center mt-5' style={{ height: '60vh' }}>
            <div className='mt-6'>
                <h1 className='h1 text-danger'>404</h1>
                <h2 className='text-warning'> OPPS! PAGE NOT FOUND </h2>
                <h5 className='text-danger'> Sorry, the you are looking for doesn't Exist.</h5>
            </div>
        </div>
    );
};

export default NotFound;