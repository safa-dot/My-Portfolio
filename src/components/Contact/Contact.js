import React, { useRef, useState } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import Map from '../../assets/images/map.svg';
import MapPin from '../../assets/images/location-pin.png';

function Contact() {



    // *********************FORM EMAILJS*********************
    const form = useRef();

    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uz86p7j', 'template_t83e9cc', form.current, '9jtzyjFdSJDWmBYCx')
            .then((result) => {
                setSent(true);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className='container contact-container  '>
                <div className='row align-items-center'>
                    <div className='text-zone col-sm-12 col-md-12 col-lg-6 '>
                        <h1>
                            CONTACT ME
                        </h1>
                        <p>
                            I am interested in freelance opportunities - especially ambitious projects. However, if you have any requests or question, don't hesitate to contact me using the below form.
                        </p>


                        {/* ***********CONTACT FORM*******************************************/}
                        <div className='contact-form '>

                            {/* ***********NAME INPUT******** */}
                            <form ref={form} onSubmit={sendEmail}>
                                <div
                                    class="form-floating mb-3">
                                    <input type="text" class="form-control " name="from_name" id="floatingInput" placeholder="Full name" required />
                                    <label for="floatingInput ">Full Name</label>
                                </div>
                                {/* ***********EMAIL INPUT******** */}
                                <div
                                    class="form-floating mb-3">
                                    <input type="email" class="form-control" name="user_address" id="floatingInput" placeholder="name@example.com" required />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                {/* ***********SUBJECT INPUT******** */}
                                <div
                                    class="form-floating mb-3">
                                    <textarea class="form-control" placeholder="Subject" name="subject" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Subject</label>
                                </div>
                                {/* ***********Message INPUT******** */}
                                <div
                                    class="form-floating mb-3">
                                    <textarea class="form-control" placeholder="Message" name="message" id="floatingTextarea2" style={{ height: 100 }} required></textarea>
                                    <label for="floatingTextarea2">Message</label>
                                </div>
                                {/* ***********SUBMIT BUTTON******** */}
                                <div
                                    className="row align-items-center">
                                    <button type="submit" className="btn contact-btn col-2 ms-3" value="send">Send</button>
                                    <span className="col-5 offset-2" style={{ fontSize: 19 }}>{sent && "Thank you for contacting me!"}</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* *************************END FORM************************8 */}
                    <div className="map-container d-none d-md-block  col-lg-6 ">
                        <img className="map col-6" src={Map} alt="map" />
                        <img className="map-pin col-1" src={MapPin} alt="map" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
