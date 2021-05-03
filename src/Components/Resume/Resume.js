import React from 'react';
import Skills from '../Skills/Skills';
// import Timeline from '@material-ui/lab/Timeline';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
import cv from "../../cv/cv.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
    return (
        <section>
            <h2 className="text-center mt-5"><span style={{ color: 'crimson' }}>My</span> Resume</h2>
           <div className="text-center"> <a  className="details-btn" href={cv} target="_blank" rel="noopener noreferrer" download="Rajaul's-Resume"><button className="main-btn"><FontAwesomeIcon icon={faDownload} /> Resume</button></a></div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5">

                    <div className="col-md-6 mt-3" style={{ boxShadow: '2px 2px 10px 5px black' }}>
                        <h4 className="text-center pt-3" style={{ color: 'crimson' }}>Personal Info</h4><hr />
                        <div className="mt-2 ps-2">
                            <h5><span style={{ color: 'crimson' }}>Name:</span> Rajaul Karim </h5>
                            <p><span style={{ color: 'crimson' }}>Date of Birth:</span> 28 Oct 2000 </p>
                            <p><span style={{ color: 'crimson' }}>Nationality:</span> Bangladesh</p>
                        </div>
                       
                    </div>
                     <div className="col-md-6 mt-3" style={{ boxShadow: '2px 2px 10px 5px black' }}>
                        <h4 className="text-center pt-3" style={{ color: 'crimson' }}>Adress</h4><hr />
                        <div className="mt-2 ps-2">
                            <p><span style={{ color: 'crimson' }}>Adress:</span> Ishwargonj, Mymensingh </p>
                            <p><span style={{ color: 'crimson' }}>Email:</span> rajaulkarim2820@gmail.com </p>
                            <p><span style={{ color: 'crimson' }}>Phone:</span> +888 01776030787</p>
                        </div>
                       
                    </div>

                    <div className="col-md-6 mt-3" style={{ boxShadow: '2px 2px 10px 5px black' }}>
                        <h4 className="text-center pt-3" style={{ color: 'crimson' }}>Education</h4><hr />
                        <div>
                            <p style={{ color: 'crimson' }}>2019-Present</p>
                            <h5>Jagganth University, Dhaka</h5>
                            <p>B.Sc. in CSE</p>
                        </div>
                        <div className="mt-5">
                            <p style={{ color: 'crimson' }}>2016-2018</p>
                            <h5>Agricultural Collage, Mymensingh</h5>
                            <p>Higher secondary</p>
                        </div>
                    </div>

                    

                    <div className="col-md-6 mt-3" style={{ boxShadow: '2px 2px 10px 5px black' }}>
                        <h4 className="text-center pt-3" style={{ color: 'crimson' }}>Experience</h4><hr />
                        <div className="mt-2 ps-2">
                            <p style={{ color: 'crimson' }}>2020-Present</p>
                            <h5>Web Developer(ReactJS)</h5>
                            <p>More then 10 project..</p>
                        </div>
                        <div className="mt-5 ps-2">
                            <p style={{ color: 'crimson' }}>2020-Present</p>
                            <h5>UNICEF Volunteer</h5>
                            <p>UNICEF Bangladesh</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3" style={{ boxShadow: '2px 2px 10px 5px black' }}>
                       <h4 className="text-center pt-3" style={{ color: 'crimson' }}>Programming Language</h4><hr />
                        <div className="mt-2 ps-2 d-flex justify-content-center">
                           <div className="row w-75">
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>Javascript</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>ReactJS</h5></div>
                               <div className="col-md-4 mb-5 text-center" style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>Bootstrap</h5></div>
                              
                               <div className="col-md-4 mb-5 text-center" style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>C++</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>ReduxJS</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>NodeJS</h5></div>
                               <div className="col-md-4 mb-5 text-center" style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>React Native</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>ExpressJs</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>ES6</h5></div>
                           </div>
                        </div>
                    </div>
                   
                    <div className="col-md-6 mt-3" style={{ boxShadow: '2px 2px 10px 5px black' }}>
                       <h4 className="text-center pt-3" style={{ color: 'crimson' }}>Tools</h4><hr />
                        <div className="mt-2 ps-2 d-flex justify-content-center">
                           <div className="row w-75">
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>Firebase</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>Netlify</h5></div>
                               <div className="col-md-4 mb-5 text-center" style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>ChromeDev</h5></div>
                               <div className="col-md-4 mb-5 text-center" style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>Heroku</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>VSCode</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>Git</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>CodeBlocks</h5></div>
                               <div className="col-md-4 mb-5 text-center"style={{ boxShadow: '1px 1px 3px 1px crimson' }}> <h5>MY SQL</h5></div>
                           </div>
                        </div>
                    </div>
                    </div>
                </div>
                 <Skills></Skills>
        </section>
    );
};

export default Resume;