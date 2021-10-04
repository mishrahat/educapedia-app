import React from 'react';
import './Service.css';

const Service = (props) => {
    const { name, price, img } = props.service;
    return (
        <div className="all-services">
            <div className='mini-service'>
                <img className='w-75' src={img} alt="" />
                <div className='service-info'>
                    <h5 style={{ fontFamily: 'Poppins', color: '#2f2d52' }}>{name}</h5>
                    <h6 style={{ fontFamily: 'Poppins', color: '#2f2d52' }}>Price: ${price}</h6>

                </div>
            </div>
        </div>
    );
};

export default Service;