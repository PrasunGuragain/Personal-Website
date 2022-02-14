import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact" id="Contact">
            <div className="row">
                <div className="contactBox">
                    <div className='title'>
                        <h1 className="contact_title">
                            Contact
                        </h1>
                        <p className="text">Phone #: (785) 317-3007</p>
                        <p className="text">Email: guragainprasun@gmail.com</p>
                    </div>
                    <div className="inputBox">
                        <input type="text" className="inputs name" placeholder="Name" />
                        <input type="text" className="inputs email" placeholder="Email" />
                        <input type="text" className="inputs subject" placeholder="Subject" />
                        <textarea className="inputs message" id="message" placeholder="Message"/>
                        <button className="btn" type="submit">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
