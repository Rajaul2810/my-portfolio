import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="mt-5 text-center pt-2"style={{backgroundColor:'crimson'}}  >
            <div className="row ms-3 me-3 ">
                <div className="col-md-4">
                  <h4>Rajaul's Portfolio</h4><hr/>
                </div>
                <div className="col-md-4">
                   <h5>Info</h5><hr/>
                   <h6><Link style={{textDecoration:'none', listStyle:'none',color:'whitesmoke'}} to="/home">Home</Link></h6>
                   <h6><Link style={{textDecoration:'none', listStyle:'none',color:'whitesmoke'}} to="/projects">projects</Link></h6>
                   <h6><Link style={{textDecoration:'none', listStyle:'none',color:'whitesmoke'}} to="/contact">Contact</Link></h6>
                </div>
                <div className="col-md-4">
                    <h5>About Me</h5><hr/>
                    <div className="d-flex mt-3 ms-5 text-center" >
                               <h3 className="ms-4"><a href="https://github.com/Rajaul2810" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></h3>
                               <h3 className="ms-4"><a href="https://www.linkedin.com/in/rejaul-hira-652691203/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></h3>
                               <h3 className="ms-4"><a href="https://www.facebook.com/Hira2810/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></h3>
                  </div>
                </div>
            </div>
            <p className="pb-2" style={{color:'black'}}><small>&copy; Rajaul's Portfolio.|| 2021 </small></p>
        </section>
    );
};

export default Footer;