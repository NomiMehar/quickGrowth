import React, { useEffect } from 'react'
import './MaintenanceProcess.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';
function MaintenanceProcess() {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
            title: 'Comprehensive Website Audit',
            imageSrc: '/images/services/pr1.svg',
            description: 'Our process starts with a meticulous evaluation of your existing website. We scan for potential weaknesses, outdated elements, and functionality issues. Our web developers will analyze your site’s infrastructure, identifying room for enhancements to provide a seamless user experience.'
        },
        {
            title: 'Personalized Maintenance Strategy',
            imageSrc: '/images/services/pr2.svg',
            description: 'After the audit, we craft a custom website maintenance plan tailored to your unique needs. We align this strategy with your business goals, ensuring the website continues to effectively serve as your digital storefront. This involves regular updates, SEO optimization, and content updates.'
        },
        {
            title: 'Regular Monitoring',
            imageSrc: '/images/services/pr3.svg',
            description: 'Our team provides 24/7 monitoring, ensuring your website’s optimum performance at all times. We proactively identify potential issues before they escalate, and our swift response mechanisms tackle any arising challenges promptly. Ensuring your website’s uninterrupted, superior performance is our priority.'
        },
    ]
    return (
        <React.Fragment>
            <div className="maintenanceProcess">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Our Website Maintenance <br />
                            <span> Process</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {slideData.map((item, index) => (
                                <div className="col-lg-4 col-md-6 mt-4" key={index}>
                                    <div className="maintenanceProcess__card">
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

export default MaintenanceProcess
