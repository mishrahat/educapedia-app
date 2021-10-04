import React from 'react';
import load from '../../images/loading.gif';
import './CourseDetails.css';

const CourseDetails = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h2 style={{ fontFamily: 'Poppins', color: '#2f2d52' }}>Course Loading</h2>
            <img className='w-25' src={load} alt="" />
        </div>
    );
};

export default CourseDetails;