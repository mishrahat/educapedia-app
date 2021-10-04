import React from 'react';
import gif from '../../images/notfound.gif';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center' style={{ color: 'red', fontFamily: 'Poppins' }}>404</h1>
            <h4 className='text-center' style={{ color: 'black', fontFamily: 'Poppins' }}> Page Not Found</h4>
            <img style={{ marginLeft: '700px', marginTop: '50px' }} className='w-25' src={gif} alt="" />
        </div >
    );
};

export default NotFound;