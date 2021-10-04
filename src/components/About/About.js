import React from 'react';
import aboutkid from '../../images/about-kid.png';
import kidabout from '../../images/about-kid-2.png';

const About = () => {
    return (
        <div className='container'>
            <h1 className='title text-center'>Why US?</h1>
            <div class="row">
                <div class="col-lg-6">
                    <p style={{ fontFamily: 'Poppins', marginTop: '150px' }}>You will get a quality education with a mesmerizing learning experience. Educapedia provides well-planned career guidelines for your future. Enroll yourself and grab the best programs available on the internet. </p>
                </div>
                <div class="col-lg-6">
                    <img className='w-75' src={aboutkid} alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <img className='w-75' src={kidabout} alt="" />
                </div>
                <div class="col-lg-6">
                    <p style={{ fontFamily: 'Poppins', marginTop: '150px' }}>Educapedia offers world-class programs with proper guidelines. From science to agriculture, everything will be done with hands-on experience. Live with excellence and grab the power pack sensation of education. </p>
                </div>
            </div>
        </div>
    );
};

export default About;