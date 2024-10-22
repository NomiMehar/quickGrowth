import React, { useEffect } from 'react'
import './benefits.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';
function CopywritingServices() {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/benefit-1.svg",
            "title": "Better Brand Recognition",
          "description": "Internet search engine marketing allows you to select and bid on relevant keywords that align with Canadian customers' search intent. Google SEM also enables you to showcase your brand in the ad's headline and description, boosting visibility and awareness of your products & services."
        },
        {
          "imageSrc": "/images/services/benefit-2.svg",
            "title": "Increased Conversion",
          "description": "One of the main advantages of Google SEM ads is their ability to provide quick results and a fast return on investment (ROI) in Canada, allowing you to generate new sales and conversions almost immediately. However, ongoing advertising and regular campaign updates are essential for maintaining year-over-year growth."
        },
        {
          "imageSrc": "/images/services/benefit-3.svg",
            "title": "Specific Targeting",
          "description": "Statistics show that over 30 billion Google searches occur monthly, but 99.9% may not be relevant to your target audience. With SEM PPC, you can leverage geo-targeting, ad scheduling, and device targeting to optimize ad performance and ensure your Google SEM campaign reaches the right Canadian audience."
        },
        {
          "imageSrc": "/images/services/benefit-4.svg",
            "title": "Greater Campaign Control",
          "description": "SEM digital marketing allows you to easily manage your advertising budget, campaign scope, and brand messaging in Canada. Unlike SEO, where search engines dictate organic results, Google search advertising gives you complete control over CTAs, ad scheduling, audience targeting, and more."
        },
        {
          "imageSrc": "/images/services/benefit-5.svg",
            "title": "Measurable Growth",
          "description": "Internet search engine marketing allows you to assess your ad performance and measure the results of each campaign in Canada. With access to comprehensive analytics and campaign data, you can identify which ads yield the highest conversion rates based on metrics such as CTR, clicks, impressions, and more."
        },
        {
          "imageSrc": "/images/services/benefit-6.svg",
            "title": "Improved Organic Traffic",
          "description": "Research shows that over 93 percent of online experiences in Canada start with a search engine, making higher search visibility crucial for reaching your customers. By leveraging SEM effectively, you can drive high-quality traffic to your website from search engines."
        }
      ]
      
    return (
        <React.Fragment>
            <div className="copywritingServices">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Key Benefits of  <span>Search Engine Marketing</span></h2>
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

export default CopywritingServices
