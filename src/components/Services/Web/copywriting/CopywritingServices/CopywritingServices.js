import React, { useEffect } from 'react'
import './CopywritingServices.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';
function CopywritingServices() {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/cw1.svg",
            "title": "Website Copywriting",
          "description": "The right words can help your site be found, and they’ll keep people reading long enough to get a sense of who you are, how you can make their lives better, why they should choose you, and what they should do next. I write custom website copy that connects."
        },
        {
          "imageSrc": "/images/services/cw2.svg",
            "title": "Blog Writing",
          "description": "Blog Writing is one of the most important aspects of Content Marketing. Well written blogs help both in creating your verbal branding as well as overall recall."
        },
        {
          "imageSrc": "/images/services/cw3.svg",
            "title": "Article Writing",
          "description": "If you want to be a thought leader or an industry leader, you need to publish in depth thoughts in the print or the online media. We help you with writing them."
        },
        {
          "imageSrc": "/images/services/cw4.svg",
            "title": "Whitepapers & eBooks",
          "description": "Whether you want to generate more leads through a lead magnet or want to strengthen your brand image, whitepapers and eBooks are a clear choice."
        },
        {
          "imageSrc": "/images/services/cw5.svg",
            "title": "Product Descriptions",
          "description": "While buying products online, people read product descriptions in detail. Gone are the days of impulse buying with eCommerce being abused."
        },
        {
          "imageSrc": "/images/services/cw6.svg",
            "title": "Marketing Copy Writing",
          "description": "When it comes to B2B or B2C marketing copy, you need content people want to read. Whether you’re creating digital content, a newsletter, sales brochure, fundraising materials, business proposal or annual report."
        }
      ]
      
    return (
        <React.Fragment>
            <div className="copywritingServices">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Copy Writing <span>Services</span></h2>
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
                            <Link to="/contact-us" className="btn-custom">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CopywritingServices
