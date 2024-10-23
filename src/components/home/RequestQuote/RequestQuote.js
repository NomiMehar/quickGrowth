import React, { useEffect, useState } from 'react';
import './RequestQuote.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';

function RequestQuote() {
    const [budget, setBudget] = useState(5000); // Initial value

    const handleSliderChange = (e) => {
        const value = e.target.value;
        setBudget(value);
        // Update the slider's background fill
        const percent = ((value - 1000) / (10000 - 1000)) * 100;
        e.target.style.setProperty('--value', `${percent}%`);
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <React.Fragment>
            <div className="requestQuote">
                <div className="container" data-aos="fade-up" data-aos-duration="1000">
                    <div className="title">
                        <h2>Request a <span>Quote</span></h2>
                    </div>
                    <div className="innerBlock">
                        <div className="row">
                            <div className="col-lg-5">
                                <h5>Select a Service</h5>
                                <div className="selectService" data-aos="fade-up" data-aos-duration="1000">
                                    {['Branding', 'Design', 'Software Development', 'Digital Marketing', 'Artificial Intelligence', 'Immigration Consulting'].map((service, index) => (
                                        <div key={index} className="form-check checkBoxes">
                                            <input
                                                type="checkbox"
                                                name="service"
                                                id={`service-${index}`}
                                                className="form-check-input"
                                            />
                                            <label htmlFor={`service-${index}`} className="form-check-label">
                                                {service}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <p className='or' data-aos="fade-up" data-aos-duration="1000">OR</p>
                                <p className='schedule' data-aos="fade-up" data-aos-duration="1000">
                                    <Link to="/contact-us">Let's Schedule a call with Us</Link>
                                </p>
                            </div>

                            <div className="col-lg-7 borderLeft">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="firstName">First Name</label>
                                                <input type="text" className="form-control" id="firstName" placeholder="John" />
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="company">Company <span style={{ color: 'red' }}>*</span></label>
                                                <input type="text" className="form-control" id="company" placeholder="Software Company" />
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="email">Email Address <span style={{ color: 'red' }}>*</span></label>
                                                <input type="email" className="form-control" id="email" placeholder="johndoe@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="contactNumber">Contact Number</label>
                                                <input type="tel" className="form-control" id="contactNumber" placeholder="+1 000 000 0000" />
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="preferredTime">Preferred Callback Time</label>
                                                <div className="preferred-time">
                                                    <input type="time" className="form-control" value="09:00" />
                                                    <div className="am-pm-buttons">
                                                        <button className="active" type="button">AM</button>
                                                        <button type="button">PM</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="form-group mt-3">
                                                <label htmlFor="budget">Your Budget</label>
                                                <div className="budget-slider">
                                                    <input
                                                        type="range"
                                                        min="1000"
                                                        max="10000"
                                                        value={budget}
                                                        onChange={handleSliderChange}
                                                        style={{
                                                            background: `linear-gradient(to right, #000 ${((budget - 1000) / (10000 - 1000)) * 100}%, #dca629 ${((budget - 1000) / (10000 - 1000)) * 100}%)`
                                                        }}
                                                    />
                                                    <div className="budget-amount">${budget}</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="form-group mt-3" data-aos="fade-up" data-aos-duration="1000">
                                        <label htmlFor="projectDescription">Tell us about Your Project!</label>
                                        <textarea className="form-control" id="projectDescription" rows="3" placeholder="abc..."></textarea>
                                    </div>

                                    <button type="submit" className="btn-custom mt-4" data-aos="fade-up" data-aos-duration="1000">
                                        SUBMIT
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RequestQuote;
