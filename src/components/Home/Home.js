import React, { useEffect, useState } from 'react';
import girl from '../../images/girl.png';
import boy from '../../images/boy.png';
import './Home.css';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const allServices = services.slice(0, 4);
    const fontStyle = { fontFamily: 'Poppins' }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4">
                    <div className='girl-image'>
                        <img className='w-100' src={girl} alt="" />
                    </div>
                </div>
                <div className="col-lg-4">
                    <h1 className='title'>Give Every Child A Good Start</h1>
                    <button className='start-btn'>Get Started <i className="fas fa-chevron-circle-right"></i></button>
                </div>
                <div className="col-lg-4">
                    <img className='w-100' src={boy} alt="" />
                </div>
            </div>
            <div className='second-section mx-auto'>
                <div className="row">
                    <div className="col-lg-4">
                        <div className='more-heading'>
                            <i className="fas fa-user"></i>
                            <h2 style={{ fontFamily: 'Fredoka One', color: '#2f2d52', fontSize: '40px' }}>7.5K+</h2>
                            <h5 style={fontStyle}>Total Students Enrolled Here</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='more-heading'>
                            <i className="fas fa-bolt"></i>
                            <h2 style={{ fontFamily: 'Fredoka One', color: '#2f2d52', fontSize: '40px' }}>50+</h2>
                            <h5 style={fontStyle}>Available Programs and Increasing</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='more-heading'>
                            <i className="fas fa-chalkboard-teacher"></i>
                            <h2 style={{ fontFamily: 'Fredoka One', color: '#2f2d52', fontSize: '40px' }}>70+</h2>
                            <h5 style={fontStyle}>Teachers To Guide You and Many More</h5>
                        </div>
                    </div>
                </div>
                <h2 style={{ fontFamily: 'Fredoka One', color: '#2f2d52', fontSize: '40px', textAlign: 'center', marginTop: '50px' }}>Programs</h2>
                <div className='programs'>
                    <div className="my-services">
                        {
                            allServices.map(service =>
                                <HomeServices
                                    service={service}></HomeServices>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;