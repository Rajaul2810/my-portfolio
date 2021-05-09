import React from 'react';
import * as animationData from '../../images/contact.json';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_iv3hkks', 'template_rgpcs69', e.target, 'user_iSsaBqC4wDa7Cm0LLwZBt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    // constructor(props){
    //     super(props);
    //     this.state = {isStopped: false, isPaused: false};
    // }

    
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: animationData,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    //  };


    return (
        <section>
            <h2 className="text-center">Contact <span style={{ color: 'crimson' }}>Me</span></h2>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 pt-3 pe-3 ps-3 pb-3" style={{ boxShadow: '2px 2px 10px 5px black' }}>
                    <h4 className="text-center">Contact <span style={{ color: 'crimson' }}>From</span></h4>
                    {/* <Lottie options={defaultOptions}
                      
                        /> */}
                    <form action="" onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="name" placeholder="Enter name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="Enter Email" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="subject" placeholder="Enter Subject" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <input className="main-btn" type="submit" value="Submit" />
                        </div>

                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;