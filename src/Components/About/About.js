import React from 'react';
import { Link } from 'react-router-dom';
import contactImg from '../../images/contact2.png';
import Typical from 'react-typical'


const About = () => {
    return (
        <section className="mt-5">
            <h2 className="text-center pt-5">About Me</h2>
            <p style={{ color: 'crimson' }} className="text-center"> Who i am </p>
            <div className="d-flex justify-content-center pt-5 align-items-center">
                <div className="row w-75 pt-3 pe-3 ps-3 pb-3" style={{boxShadow:'2px 2px 10px 5px black'}}>
                    <div className="col-md-5">
                        <img src={contactImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7 mt-5 ">
                        <h5>I'm Rajaul Karim <br/> And I'm a <span style={{ color: 'crimson' }}>
                            <Typical
                              loop={Infinity}
                              wrapper="b"
                                steps={['Web Developer.', 1000, 'Programer.', 1000,'Blogger.',1000,'Content Creator.',1000,'YouTuber.',1000,]}
                              
                            />
                        </span></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sit excepturi aspernatur culpa quam est, minima necessitatibus ipsum. Assumenda tenetur culpa deserunt nobis suscipit blanditiis expedita, fugit officia laboriosam molestiae ipsam nisi quasi reprehenderit. Illo temporibus nostrum dolores eos. Itaque labore iure harum magnam nobis facere odio vero eligendi optio?</p>
                        <Link className="details-btn" to="/resume"><button className="main-btn">Details Me</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;