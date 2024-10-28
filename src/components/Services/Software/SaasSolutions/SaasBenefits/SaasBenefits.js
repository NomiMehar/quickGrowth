import React, { useEffect } from 'react'
import AOS from 'aos';
import './SaasBenefits.scss'
import { Link } from 'react-router-dom';

function SaasBenefits() {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/benefit-1.svg",
            "title": "Cost-Effectiveness",
          "description": "SaaS applications reduce the need for costly on-premise hardware and infrastructure, offering a more budget-friendly alternative for Canadian companies of all sizes."
        },
        {
          "imageSrc": "/images/services/benefit-2.svg",
            "title": "Scalability",
          "description": "Whether your business is growing or experiencing fluctuating demands, SaaS applications can scale seamlessly, ensuring you only pay for what you need."
        },
        {
          "imageSrc": "/images/services/benefit-3.svg",
            "title": "Accessibility",
          "description": "SaaS platforms provide easy access from any device with an internet connection, enabling remote work and enhancing flexibility for Canada's diverse workforce."
        },
        {
          "imageSrc": "/images/services/benefit-4.svg",
            "title": "Security & Compliance",
          "description": "With robust security protocols and compliance with Canadian data protection laws, SaaS solutions provide a high level of safety for sensitive information."
        },
        {
          "imageSrc": "/images/services/benefit-5.svg",
            "title": "Ongoing Support & Updates",
          "description": "Benefit from automatic updates and 24/7 customer support, ensuring your applications remain current and reliable without extra downtime."
        },
        {
          "imageSrc": "/images/services/benefit-6.svg",
            "title": "Customization",
          "description": "Customization of SaaS empowers Canadian businesses to tailor their platforms precisely by incorporating custom themes, scripts, and plugins."
        }
      ]
      
    return (
        <React.Fragment>
            <div className="SaasBenefits">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Core Benefits of Developing SaaS <br/> <span> Applications</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {slideData.map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="copywritingServices__card">
                                        <img src={item.imageSrc} alt="Ecommerce Features" />
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">LET'S TALK</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SaasBenefits
