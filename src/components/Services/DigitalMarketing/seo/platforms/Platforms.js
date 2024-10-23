import React, { useEffect } from 'react'
import './platform.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Platforms = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/plat-icon-1.svg",
            "title": "Better Brand Recognition",
          "description": "Facebook social media marketing is a popular and cost-effective online marketing strategy in Canada. With Thrive's Facebook marketing services, you can highlight your exceptional customer support and drive traffic to your website."
        },
        {
          "imageSrc": "/images/services/plat-icon-2.svg",
            "title": "Increased Conversion",
          "description": "Invest in Twitter social media marketing to enhance your brand's visibility in Canada. As your dedicated advertising agency, we use data-tracking tools to create targeted strategies that humanize your company and drive traffic to your online store."
        },
        {
          "imageSrc": "/images/services/plat-icon-3.svg",
            "title": "Specific Targeting",
          "description": "Connect with more customers and build a community around your brand in Canada through Instagram marketing. Thrive's experts enhance your profile, run sponsored ads, and leverage Reels and Stories to share your brand story."
        },
        {
          "imageSrc": "/images/services/plat-icon-4.svg",
            "title": "Greater Campaign Control",
          "description": "Our LinkedIn marketing agency is dedicated to building your professional reputation across social media in Canada. We believe that a tailored LinkedIn marketing strategy sets your brand apart from the competition."
        },
        {
          "imageSrc": "/images/services/plat-icon-5.svg",
            "title": "Measurable Growth",
          "description": "Statistics reveal that over 90 percent of online shoppers in Canada discover brands through YouTube marketing videos. Enhance your YouTube social media marketing strategy to capture your customers attention and encourage them to take action."
        },
        {
          "imageSrc": "/images/services/plat-icon-6.svg",
            "title": "Improved Organic Traffic",
          "description": "Convert browsers into customers in Canada with Thrive's Pinterest marketing solutions, where we optimize your pins with proper categorization, text overlays, keyword-rich descriptions, and strong CTAs."
        }
      ]
      
    return (
        <React.Fragment>
            <div className="Seo-Platforms">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Search Engine Marketing  <span>Platforms</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {slideData.map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="plat-card">
                                        <div className='plat-head'>
                                            <h3>{item.title}</h3>
                                            <div className='plat-img-wrapper'>
                                                 <img src={item.imageSrc} alt="Platforms" />
                                            </div>
                                        </div>
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

export default Platforms