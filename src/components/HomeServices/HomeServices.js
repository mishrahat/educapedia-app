import React from 'react';
import './HomeServices.css'

const HomeServices = (props) => {
    const { name, price, img } = props.service;
    return (
        <div className="myService">
            <img className='w-50' src={img} alt="" />
            <div className='service-info'>
                <h4 style={{ fontFamily: 'Poppins', color: 'white' }}>{name}</h4>
                <h5 style={{ fontFamily: 'Poppins', color: 'white' }}>Price: ${price}</h5>
            </div>
        </div >
    );
};

export default HomeServices;