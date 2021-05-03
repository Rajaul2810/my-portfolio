import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="mt-5 text-center pt-2"style={{backgroundColor:'black'}}  >
            <div className="row ms-3 me-3 ">
               
                <div className="col-md-6 pb-2">
                    <h4>Rajaul'<span  style={{color:'crimson'}}>s</span> Portfo<span style={{color:'crimson'}}>lio</span></h4>
                    <p>Dhaka, Bangladesh</p>
{/*                    
                   <h6><Link style={{textDecoration:'none', listStyle:'none',color:'whitesmoke'}} to="/home">Home</Link></h6>
                   <h6><Link style={{textDecoration:'none', listStyle:'none',color:'whitesmoke'}} to="/project">projects</Link></h6>
                   <h6><Link style={{textDecoration:'none', listStyle:'none',color:'whitesmoke'}} to="/contact">Contact</Link></h6> */}
                </div>
                <div className="col-md-6">
                    <h5>About <span  style={{color:'crimson'}}> Me</span></h5><hr/>
                    <div className="d-flex mt-3 ms-5 justify-content-center" >
                               <h3><a  style={{color:'crimson'}} href="https://github.com/Rajaul2810" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></h3>
                               <h3 className="ms-4"><a  style={{color:'crimson'}} href="https://www.linkedin.com/in/rejaul-hira-652691203/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></h3>
                               <h3 className="ms-4"><a  style={{color:'crimson'}} href="https://www.facebook.com/Hira2810/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></h3>
                  </div>
                </div>
            </div>
            <p className="pb-2" style={{color:'white'}}><small>&copy; Rajaul's Portfolio.|| 2021 </small></p>
        </section>
    );
};

export default Footer;