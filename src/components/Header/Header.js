import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import youtube from '../../images/YouTube Logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='header' >
                <nav className="navbar navbar-expand-lg navbar-light mx-auto">
                    <div className="container-fluid">
                        <img src={logo} alt="" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to='/home'><button>Home</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about'><button>About</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/services'><button>Services</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/teachers'><button>Teachers</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <a title='youtube.com' href='https://www.youtube.com/'><img src={youtube} alt='' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <hr />
        </div >
    );
};

export default Header;