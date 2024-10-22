import React, { useEffect } from 'react'
import './HoistingServices.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';
function HoistingServices() {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
            title: 'Domain Registration',
            imageSrc: '/images/services/hostings1.svg',
            description: 'Launch your online identity with a custom domain name. We can help you find the right name for your business in 60 seconds.'
        },
        {
            title: 'Website Hosting',
            imageSrc: '/images/services/hostings2.svg',
            description: 'Easily create your own website with our website builder: You select a theme, make it your own, and get your website online today!'
        },
        {
            title: 'Email Hosting',
            imageSrc: '/images/services/hostings3.svg',
            description: 'We offer several enterprise-grade hosted email plans for your small business. Choose the one that’s right for you.'
        },
        
    ]
    return (
        <React.Fragment>
            <div className="hoistingServices">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>What Service <span>We Offer</span></h2>
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
                            <Link to="/" className="btn-custom">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HoistingServices
