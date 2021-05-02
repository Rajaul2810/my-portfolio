import React from 'react';
import './Projects.css';
import senior from '../../images/senior1.png';
import bazar from '../../images/bazar.png';
import rider from '../../images/rider.png';

const Projects = () => {
    return (
        <section>
            <h2 className="text-center mt-5">Personal <span style={{ color: 'crimson' }}>Projects.</span></h2>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row w-75 mt-5" >
                    <div className="col-md-4 mb-3">
                        <div className=" pt-3 pe-3 ps-3 pb-3" style={{ boxShadow: '1px 1px 5px 1px crimson' }}>
                            <div className="text-center pb-3">
                                <img src={senior} className="img-fluid" style={{ height: '300px', width: '50%' }} alt="" />
                            </div>
                            <div >
                                <h4 className=""><span style={{ color: 'crimson' }}>1. </span>Senior-Care</h4>
                                <h5 style={{ color: 'crimson' }}>Project Summary:</h5>
                                <ul>
                                    <li> People can book services and give a review.</li>
                                    <li>Login system google.</li>
                                    <li>General user and admin can see a separate Dashboard.</li>
                                    <li> Admin can add services and delete services.</li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-around">
                                <button className="main-btn">
                                <a className="project-link" href="https://github.com/Rajaul2810/senior-care-client" target="_blank" rel="noopener noreferrer">Code</a>
                                </button>
                                <button className="main-btn">
                                <a className="project-link" href="https://senior-care-5aad9.web.app" target="_blank" rel="noopener noreferrer">Live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className=" pt-3 pe-3 ps-3 pb-3" style={{ boxShadow: '1px 1px 5px 1px crimson' }}>
                            <div className="text-center pb-3">
                                <img src={bazar} className="img-fluid" style={{ height: '300px', width: '50%' }} alt="" />
                            </div>
                            <div >
                                <h4 className=""><span style={{ color: 'crimson' }}>2. </span>Smart-Bazar</h4>
                                <h5 style={{ color: 'crimson' }}>Project Summary:</h5>
                                <ul>
                                    <li>A Single-page shopping web application.</li>
                                    <li>Login system google.</li>
                                    <li>People can select and check out their products</li>
                                    <li>Admin can add products and delete products. </li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-around">
                              <button className="main-btn">
                              <a className="project-link" href="https://github.com/Rajaul2810/smart-bazar-client" target="_blank" rel="noopener noreferrer">Code</a><br />
                              </button>
                             <button className="main-btn">
                             <a className="project-link" href="https://smart-bazar-e26e5.web.app" target="_blank" rel="noopener noreferrer">Live</a>
                             </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className=" pt-3 pe-3 ps-3 pb-3" style={{ boxShadow: '1px 1px 5px 1px crimson' }}>
                            <div className="text-center pb-3">
                                <img src={rider} className="img-fluid" style={{ height: '300px', width: '50%' }} alt="" />
                            </div>
                            <div >
                                <h4 className=""><span style={{ color: 'crimson' }}>3. </span>Dragon Rider</h4>
                                <h5 style={{ color: 'crimson' }}>Project Summary:</h5>
                                <ul>
                                    <li>Ride Sharing web application.</li>
                                    <li>Login system google,Email and Password,Facebook.</li>
                                    <li>People will be able to select the car and move from one place to another</li>
                                    <li>Implemented google map</li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-around">
                               <button className="main-btn">
                               <a className="project-link" href="https://github.com/Rajaul2810/dragon-rider" target="_blank" rel="noopener noreferrer">Code</a><br />
                               </button>
                               <button className="main-btn">
                               <a className="project-link" href="https://react-auth-86b21.web.app" target="_blank" rel="noopener noreferrer">Live</a>
                               </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;