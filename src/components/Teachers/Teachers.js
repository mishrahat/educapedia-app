import React from 'react';
import mosh from '../../images/teacher-1.jpg';
import qazi from '../../images/teacher-2.jpg';
import subeen from '../../images/teacher-3.jpg';
import jhankar from '../../images/teacher-4.jpg';
import sumit from '../../images/teacher-5.jpg';
import jonas from '../../images/teacher-6.jpg';
import max from '../../images/teacher-7.jpg';
import angela from '../../images/teacher-8.jpg';
import hasin from '../../images/teacher-9.jpg';
import './Teachers.css';

const Teachers = () => {
    return (
        <div className="container">
            <div className="teachers row">
                <div className="col-lg-3">
                    <img className='w-50' src={mosh} alt="" />
                    <div className='teacher-info'>
                        <h4 style={{ fontFamily: 'Poppins' }}>Mosh Hamedani</h4>
                        <button className='teacher-btn'><a target='_blank' rel='noreferrer' href="https://www.youtube.com/programmingwithmosh">Contact Here</a></button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img className='w-50' src={qazi} alt="" />
                    <div className='teacher-info'>
                        <h4 style={{ fontFamily: 'Poppins' }}>Rafeh Qazi</h4>
                        <button className='teacher-btn'><a target='_blank' rel='noreferrer' href="https://www.youtube.com/c/CleverProgrammer">Contact Here</a></button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img className='w-50' src={subeen} alt="" />
                    <div className='teacher-info'>
                        <h4 style={{ fontFamily: 'Poppins' }}>Tamim Subeen</h4>
                        <button className='teacher-btn'><a target='_blank' rel='noreferrer' href="https://www.youtube.com/c/TamimShahriar">Contact Here</a></button>
                    </div>
                </div>
            </div>
            <div className="teachers row">
                <div className="col-lg-3">
                    <img className='w-50' src={jhankar} alt="" />
                    <div className='teacher-info'>
                        <h4 style={{ fontFamily: 'Poppins' }}>Jhankar Mahbub</h4>
                        <button className='teacher-btn'><a target='_blank' rel='noreferrer' href="https://www.youtube.com/c/JhankarMahbub">Contact Here</a></button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img className='w-50' src={sumit} alt="" />
                    <div className='teacher-info'>
                        <h4 style={{ fontFamily: 'Poppins' }}>Sumit Saha</h4>
                        <button className='teacher-btn'><a target='_blank' rel='noreferrer' href="https://www.youtube.com/c/LearnwithSumit">Contact Here</a></button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img className='w-50' src={jonas} alt="" />
                    <div className='teacher-info'>
                        <h4 style={{ fontFamily: 'Poppins' }}>Jonas Schmedtmann</h4>
                        <button className='teacher-btn'><a target='_blank' rel='noreferrer' href="https://www.youtube.com/c/JonasSchmedtmann">Contact Here</a></button>
                    </div>
                </div>
            </div>
            <div className="teachers row">
                <div className="col-lg-3">
                    <img className='w-50' src={max} alt="" />
                    <div className='teacher-info'>
                        <h4 style={{ fontFamily: 'Poppins' }}>Maximilian Schwarzmüller</h4>
                        <button className='teacher-btn'><a target='_blank' rel='noreferrer' href="https://www.youtube.com/c/Academind">Contact Here</a></button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img className='w-50' src={angela} alt="" />
                    <div className='teacher-info'>
                        <h4 style={{ fontFamily: 'Poppins' }}>Angela Yu</h4>
                        <button className='teacher-btn'><a target='_blank' rel='noreferrer' href="https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/">Contact Here</a></button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img className='w-50' src={hasin} alt="" />
                    <div className='teacher-info'>
                        <h4 style={{ fontFamily: 'Poppins' }}>Hasin Haydar</h4>
                        <button className='teacher-btn'><a target='_blank' rel='noreferrer' href="https://www.youtube.com/c/LearnwithHasinHayder">Contact Here</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;