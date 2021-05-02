import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-item1" >
            <nav className="container-fluid">
                <Link className="navbar-brand ms-5 nav-item1" style={{fontSize:'30px'}} to="/home">Portfo<span style={{color:'crimson'}}>lio.</span></Link>
                <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{color:'white'}} className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="d-flex justify-content-end"> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-5 text-center ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active nav-item1" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-item1" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-item1" to="/Blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-item1" to="resume">Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-item1" to="/contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
                {/* </div> */}

            </nav>
        </nav>
    );
};

export default Navbar;