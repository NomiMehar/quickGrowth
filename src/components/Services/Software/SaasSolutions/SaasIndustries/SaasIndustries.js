import React, { useEffect } from 'react'
import './SaasIndustries.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function SaasIndustries() {
    useEffect(() => {
        AOS.init();
    }, [])
    const slideData = [
        {
            "imageSrc": "/images/services/ind-1.svg",
            "title": "Healthcare",
            "description": "Enhance diagnostics, personalize treatment plans, and streamline patient care in Canada with our SaaS development solutions. Our advanced analytics enable early disease detection and predictive modeling, leading to improved patient outcomes and greater operational efficiency."
        },
        {
            "imageSrc": "/images/services/ind-2.svg",
            "title": "Fintech",
            "description": "Our SaaS solutions support secure transactions, risk management, and personalized financial services tailored for the Canadian market. We help fintech companies innovate and maintain a competitive edge with advanced fraud detection and real-time risk assessment solutions."
        },
        {
            "imageSrc": "/images/services/ind-3.svg",
            "title": "E-Commerce",
            "description": "Optimize inventory management, personalize customer experiences, and boost sales in Canada with our SaaS development services. Our data-driven insights into consumer behavior and market trends enhance your digital presence and improve customer engagement."
        },
        {
            "imageSrc": "/images/services/ind-6.svg",
            "title": "E-Learning",
            "description": "Personalize learning experiences, enhance student engagement, and streamline administrative tasks in Canadian education with our SaaS solutions. We support adaptive learning technologies that customize educational content to meet individual needs, making education more accessible and effective."
        },
        {
            "imageSrc": "/images/services/ind-4.svg",
            "title": "Real Estate",
            "description": "Gain insights into property valuation, market trends, and customer preferences in the Canadian real estate market with our SaaS application development solutions. Our predictive models help identify lucrative investment opportunities, enabling informed decision-making and enhanced client interactions."
        },
        {
            "imageSrc": "/images/services/ind-5.svg",
            "title": "Fitness",
            "description": "Create personalized workout plans, offer virtual coaching, and provide health monitoring solutions in Canada with our SaaS development services for fitness. Our real-time feedback and progress tracking features motivate users and enhance results, helping individuals achieve their fitness goals."
        }
    ]
    return (
        <React.Fragment>
            <div className="SaasIndustries">
                <div className='container'>
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Industries  <span> We Serves</span></h2>
                    </div>
                    <div className="row">

                        {slideData.map((item, index) => (
                            <div className="col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="1000" key={index}>
                                <div className="industry">
                                    <div className="block">
                                        <img src={item.imageSrc} alt="coreImg" />
                                        <div>
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='text-center'>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">Let's Talk</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SaasIndustries
