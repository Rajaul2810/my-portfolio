import React from 'react';
import './Projects.css';
import senior from '../../images/senior.png';
import bazar from '../../images/bazar.png';
import rider from '../../images/rider.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const Projects = () => {
    return (
        <section>
            <h2 className="text-center mt-5">Personal <span style={{ color: 'crimson' }}>Projects.</span></h2>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row w-75 mt-5" >
                    <div className="col-md-4 mb-3">
                        <div className=" pt-3 pe-3 ps-3 pb-3" style={{ boxShadow: '2px 2px 5px 2px black' }}>
                            <div className="text-center pb-3">
                                <img src={senior} className="img-fluid" style={{ height: '200px', width: '100%' }} alt="" />
                            </div>
                            <div >
                                <h4 className=""><span style={{ color: 'crimson' }}>1. </span>Senior-Care</h4>
                                <h5 style={{ color: 'crimson' }}>Project Summary:</h5>
                                <p>People can book services and give a review.
                                Login system google.
                                General user and admin can see a separate Dashboard.
                                Admin can add services and delete services.
                               </p>
                            </div>
                            <div className="d-flex justify-content-around">
                              <h2 className="icon"> <a style={{color:'crimson'}}className="project-link" href="https://github.com/Rajaul2810/senior-care-client" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></h2>
                              <h2 className="icon"> <a style={{color:'crimson'}} className="project-link" href="https://senior-care-5aad9.web.app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEye} /></a></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className=" pt-3 pe-3 ps-3 pb-3" style={{ boxShadow: '2px 2px 5px 2px black' }}>
                            <div className="text-center pb-3">
                                <img src={bazar} className="img-fluid" style={{ height: '200px', width: '100%' }} alt="" />
                            </div>
                            <div >
                                <h4 className=""><span style={{ color: 'crimson' }}>2. </span>Smart-Bazar</h4>
                                <h5 style={{ color: 'crimson' }}>Project Summary:</h5>
                                <p>Online Shopping web application and login system google.
                                People can select and check out their products.
                                Admin can add products and delete products.
                                </p>
                            </div>
                            <div className="d-flex justify-content-around">
                              <h2 className="icon">  <a style={{color:'crimson'}}className="project-link" href="https://github.com/Rajaul2810/smart-bazar-client" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a><br /></h2>
                               <h2 className="icon"> <a style={{color:'crimson'}}className="project-link" href="https://smart-bazar-e26e5.web.app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEye} /></a></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className=" pt-3 pe-3 ps-3 pb-3" style={{ boxShadow: '2px 2px 5px 2px black' }}>
                            <div className="text-center pb-3">
                                <img src={rider} className="img-fluid" style={{ height: '200px', width: '100%' }} alt="" />
                            </div>
                            <div >
                                <h4 className=""><span style={{ color: 'crimson' }}>3. </span>Dragon Rider</h4>
                                <h5 style={{ color: 'crimson' }}>Project Summary:</h5>
                                <p>Rider web application.
                                Login system Email and password, Google, Facebook.
                                People will be able to select the car and move from one place to another
                                Implemented google map
                                </p>
                            </div>
                            <div className="d-flex justify-content-around">
                               <h2 className="icon" ><a style={{color:'crimson'}} className="project-link" href="https://github.com/Rajaul2810/dragon-rider" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a><br /></h2>
                              <h2 className="icon"> <a style={{color:'crimson'}} className="project-link" href="https://react-auth-86b21.web.app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEye} /></a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;