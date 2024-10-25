import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const SaasDevServices = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/smm-1.svg",
            "title": "SaaS Startup Workshop",
          "description": "Transform your raw ideas into a product concept tailored for the Canadian market, complete with a clear development roadmap and initial estimates to guide your project to success."
        },
        {
          "imageSrc": "/images/services/smm-2.svg",
            "title": "SaaS Migrations",
          "description": "Maximize the benefits of cloud architecture for your business in Canada. Modernize your SaaS application and eliminate any concerns about reliability or scalability, ensuring a seamless experience for your users."
        },
        {
          "imageSrc": "/images/services/saasDev-1.svg",
            "title": "SaaS Growth Hacking",
          "description": "Upgrade and enhance your SaaS infrastructure for the Canadian market. We offer strategic insights and solutions—your 'cheat codes'—to help your product grow at an impressive pace."
        },
        {
          "imageSrc": "/images/services/saasDev-2.svg",
            "title": "SaaS MVP Development",
          "description": "As an experienced SaaS application development company in Canada, we will build a Minimum Viable Product (MVP) for your dream app from the ground up—delivering it on time and within budget."
        },
        {
          "imageSrc": "/images/services/saasDev-3.svg",
            "title": "SaaS QA and Testing",
          "description": "Our Canadian SaaS application development team will thoroughly test every aspect of your platform to ensure it operates smoothly and securely."
        },
        {
          "imageSrc": "/images/services/saasDev-4.svg",
            "title": "SaaS API Development",
          "description": "We will develop and integrate secure, reliable APIs to enhance your SaaS infrastructure with new functionalities tailored for the Canadian market."
        }
      ]
  return (
    <div className="seoServices">
    <div className="container">
        <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>Our SaaS Development   <span> Services</span></h2>
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

export default SaasDevServices