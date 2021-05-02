import React from 'react';

const Contact = () => {
    return (
        <section>
            <h2 className="text-center">Contact <span style={{ color: 'crimson' }}>Me.</span></h2>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 pt-3 pe-3 ps-3 pb-3" style={{ boxShadow: '2px 2px 10px 5px crimson' }}>
                    <h4 className="text-center">Contact <span style={{ color: 'crimson' }}>From.</span></h4>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Subject" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="main-btn">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;