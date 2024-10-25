import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const SmmBenefits = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/smm-1.svg",
            "title": "Better Online Exposure",
          "description": "Social media marketing is a powerful tool for brands, enhancing visibility on platforms like Facebook and Instagram. An effective content strategy boosts engagement and helps connect with a wider audience."
        },
        {
          "imageSrc": "/images/services/smm-2.svg",
            "title": "High Search Rankings",
          "description": "Search engines like Google and Bing now feature social media updates, recognizing their role in visibility. The more your content is shared, the more traffic it drives to your website, enhancing search rankings."
        },
        {
          "imageSrc": "/images/services/smm-3.svg",
            "title": "Specific Audience Targeting",
          "description": "Valuable content won't convert if it misses the right audience. Social media marketing helps identify your ideal customers, allowing for targeted content and ads that resonate with their needs."
        },
        {
          "imageSrc": "/images/services/smm-4.svg",
            "title": "Improved Customer Reach",
          "description": "Approximately 54% of online users research products on social media, while 49% trust influencer recommendations. A strong social media marketing strategy can enhance brand awareness and reach the right customers."
        },
        {
          "imageSrc": "/images/services/smm-5.svg",
            "title": "Complete Brand Control",
          "description": "Social media marketing packages are customized to fit your budget, empowering you to control branding and strategy. Mastering these tools enhances your B2B marketing efforts effectively."
        },
        {
          "imageSrc": "/images/services/smm-6.svg",
            "title": "Enhanced Customer Trust",
          "description": "Mastering social media marketing helps you establish thought leadership and connect meaningfully with followers. Our agency shares valuable content and utilizes video marketing to build trust and showcase your brand’s credibility."
        }
      ]
  return (
    <div className="seoServices">
    <div className="container">
        <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>What Are the Benefits of Social Media <br />  <span>Marketing Services</span></h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className="row">

                {slideData.map((item, index) => (
                    <div className="col-lg-4 col-sm-6" key={index}>
                        <div className="seoServices__card">
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
  )
}

export default SmmBenefits