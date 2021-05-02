import React from 'react';
import './Header.css';
import img from '../../images/profile.png';
import cv from "../../cv/cv.pdf";
import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {

    return (
        <section className="mt-5">
            <div className="d-flex justify-content-center align-items-center">
            <div className="row w-75 ">
                    <div className="col-md-6 mt-5">
                       <p><small>WELCOME TO MY WEBSITE</small></p>
                       <h1>I'm Rajaul Karim</h1>
                        <h5 className="pb-2">And I'm a <span style={{color:'crimson'}}>
                        <Typical
                              loop={Infinity}
                              wrapper="b"
                                steps={['Web Developer.', 1000, 'Programer.', 1000,'Blogger.',1000,'Content Creator.',1000,'YouTuber.',1000,]}
                              
                            />
                            <div className="d-flex mt-3" >
                               <h3 className="ms-4"><a  href="https://github.com/Rajaul2810" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></h3>
                               <h3 className="ms-4"><a href="https://www.linkedin.com/in/rejaul-hira-652691203/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></h3>
                               <h3 className="ms-4"><a href="https://www.facebook.com/Hira2810/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></h3>
                            </div>
                        </span></h5>
                           <a className="details-btn" href={cv} target="_blank" download="Rajaul's-Resume"><button className="main-btn">Download CV</button></a>
                     </div>
                
                    <div className="col-md-6 mt-5">
                          <img src={img} style={{width:'300px'}} className="img-fluid pt-2" alt=""/>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default Header;