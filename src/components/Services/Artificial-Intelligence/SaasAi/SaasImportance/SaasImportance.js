import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const SaasImportance = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
            title: 'AI SaaS in retail',
            imageSrc: '/images/services/pr1.svg',
            description: 'AI-powered SaaS solutions in retail revolutionize the shopping experience with personalized product recommendations, accurate demand forecasting for optimized inventory, and AI-driven chatbots offering instant customer support, boosting satisfaction and loyalty.'
        },
        {
            title: 'AI SaaS in financial services',
            imageSrc: '/images/services/pr2.svg',
            description: 'AI-powered SaaS in financial crime prevention enables real-time fraud detection by analyzing large volumes of transaction data to spot anomalies. It also automates compliance reporting, ensuring regulatory adherence and reducing risks for institutions and their customers.'
        },
        {
            title: 'AI SaaS in industrial manufacturing',
            imageSrc: '/images/services/pr3.svg',
            description: 'AI-powered SaaS in manufacturing enables predictive maintenance to prevent costly downtime, optimizes production efficiency, and uses advanced image recognition for quality control, ensuring products meet top standards.'
        },
        {
            title: 'AI SaaS in Enterprise IT',
            imageSrc: '/images/services/pr4.svg',
            description: 'In enterprise IT and IT service management, AI SaaS enhances operational efficiency through AI-driven analytics that offer deep insights into system performance, automated incident resolution that reduces response times, and sophisticated cybersecurity services that proactively protect against emerging threats.'
        },
        {
            title: 'AI SaaS in Media',
            imageSrc: '/images/services/pr5.svg',
            description: 'AI SaaS tools revolutionize the media industry by performing content analytics to gauge viewer engagement, offering personalized content recommendations to increase viewer satisfaction, and automating the tagging and categorization of videos, making content more discoverable and accessible to audiences.'
        }
    ]
    return (
        <React.Fragment>
            <div className="SmmPlatforms">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Key Examples and Importance of AI-Powered SaaS in  <span> across Industries</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row justify-content-center">
                            {slideData.map((item, index) => (
                                <div className="col-lg-4 col-md-6 mt-4" key={index}>
                                    <div className="SmmPlatforms__card">
                                        <img src={item.imageSrc} alt="SMM Platforms" />
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

export default SaasImportance