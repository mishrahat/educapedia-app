import React from 'react';
import logo from '../../images/logo2.png'
import './Footer.css';

const Footer = () => {
    return (

        <div className='footer'>
            <div class="row">
                <div class="col-lg-3">
                    <img src={logo} alt="" />
                    <h2 style={{ fontFamily: 'Fredoka One', color: 'white', marginLeft: '250px', marginBottom: '50px' }}>Take Student Experience To The Next Level</h2>
                    <div className='icons d-flex'>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-google-plus"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h3 style={{ fontFamily: 'Poppins', color: 'white', marginLeft: '250px', marginTop: '60px' }}>Services</h3>
                    <div className='footer-services'>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Creative Thinking</p>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Career Planning</p>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Public Speaking</p>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Language Learning</p>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Agriculture, Food, and Natural Resources.</p>
                    </div>

                </div>
                <div class="col-lg-3">
                    <h3 style={{ fontFamily: 'Poppins', color: 'white', marginLeft: '250px', marginTop: '60px' }}>Teachers</h3>
                    <div className='footer-services'>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Dr. Mosh Hamedani</p>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Prof. Rafeh Qazi</p>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Tamim Shahriar Subeen</p>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Muhammad Jhankar Mahbub</p>
                        <p style={{ color: 'white', fontFamily: 'Poppins' }}>Sumit Saha</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;