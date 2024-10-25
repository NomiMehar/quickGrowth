import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import './createWeb.scss';

const CreateWebApps = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
            title: 'Custom Web Apps',
            imageSrc: '/images/services/create-web-1.svg',
            description: 'Addressing the unique requirements and needs of your business, custom web development ensures the delivery...'
        },
        {
            title: 'Web Portals',
            imageSrc: '/images/services/create-web-2.svg',
            description: 'Partner, patient, or employee platforms drive the management of various business processes or data sharing...'
        },
        {
            title: 'ERP Systems',
            imageSrc: '/images/services/create-web-3.svg',
            description: 'Track business resources — cash, raw materials, or production capacity — and workflow statuses with a custom ERP...'
        },
        {
            title: 'E-Commerce Platforms',
            imageSrc: '/images/services/create-web-4.svg',
            description: 'Drive your sales growth with our eCommerce web development services to deliver B2B and B2C platforms that support...'
        },
        {
            title: 'CRM Software',
            imageSrc: '/images/services/create-web-5.svg',
            description: 'If you want to boost your sales, marketing, and service operations, then a CRM platform is a perfect tool to automate...'
        },
        {
            title: 'Websites',
            imageSrc: '/images/services/create-web-6.svg',
            description: 'Whether your goal is to increase online presence, improve customer experience, or build brand credibility...'
        }
        
    ]
    return (
        <React.Fragment>
            <div className="CreateWebApps">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Web Applications <span>We Create</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {slideData.map((item, index) => (
                                <div className="col-lg-4 col-md-4" key={index}>
                                    <div className="hoistingServices__card">
                                        <img src={item.imageSrc} alt="Ecommerce Features" />
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">Let's Talk</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateWebApps