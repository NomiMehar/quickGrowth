import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const SmmWcu = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/wcu-smm-1.svg",
            "title": "Dedicated Account Managers",
          "description": "At Quick Growth, we assign strategists based on your industry, goals, and social media needs, often involving multiple experts. Your dedicated account managers are always available via email or phone for support and discussions."
        },
        {
          "imageSrc": "/images/services/wcu-smm-2.svg",
            "title": "Extensive Onboarding Process",
          "description": "Our social media marketing consultants offer a detailed strategy breakdown at the beginning of your campaign, outlining the tactics we'll use to achieve your goals. We also establish clear metrics from the start. This ensures alignment and transparency throughout the process."
        },
        {
          "imageSrc": "/images/services/wcu-smm-3.svg",
            "title": "Custom Social Media Marketing Strategy",
          "description": "Boost your social media engagement with a tailored strategy that drives higher ROI. Our experts use analytics to refine your marketing and target the right audience and keywords."
        },
        {
          "imageSrc": "/images/services/wcu-smm-4.svg",
            "title": "Social Media Campaign Reports",
          "description": "Our detailed reports provide a complete overview of your social media performance, including campaign results. We also offer monthly summaries of completed tasks and hours spent, helping you track your ROI effectively."
        },
        {
          "imageSrc": "/images/services/wcu-smm-5.svg",
            "title": "Paid and Organic Team",
          "description": "We match clients with subject matter experts to ensure expert care for your campaign. Our team of organic and paid strategists brings years of experience, implementing a cohesive strategy. This approach maximizes conversions across both aspects of social media marketing."
        },
        {
          "imageSrc": "/images/services/wcu-smm-6.svg",
            "title": "Diverse Marketing Experience",
          "description": "Quick Growth has experience across various B2B and B2C markets, regardless of size. Whether you’re a startup or an enterprise, we aim to exceed your expectations. We enhance your brand’s online presence through ongoing research and adaptation to trends."
        }
      ]
      
    return (
        <React.Fragment>
            <div className="copywritingServices">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Why Choose Quick Growth for Your Social <span> Media Marketing</span></h2>
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
                            <Link to="/" className="btn-custom">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SmmWcu