import React, { useEffect } from 'react'
import AOS from 'aos';

function MvpBenefits() {
    useEffect(() => {
        AOS.init();
    }, [])
    const slideData = [
        {
            "imageSrc": "/images/services/ind-1.svg",
            "title": "Idea Validation",
            "description": "MVP software development allows you to assess how well your solution addresses the pain points of Canadian end users. This approach helps you determine the feasibility of your product before committing to a full-scale launch."
        },
        {
            "imageSrc": "/images/services/ind-2.svg",
            "title": "Quick Time to Market",
            "description": "Launch your product faster than competitors with our MVP software design and development services in Canada. By including key features for early users, you can quickly gather feedback and successfully capture the market."
        },
        {
            "imageSrc": "/images/services/ind-3.svg",
            "title": "Win the Confidence of First-Adopter",
            "description": "MVP app development allows you to showcase the functionality and potential of your product to Canadian stakeholders, investors, and early adopters. This helps build confidence, launch campaigns, and secure funding."
        },
        {
            "imageSrc": "/images/services/ind-6.svg",
            "title": "Test Market Feasibility",
            "description": "Before entering the real market, MVP development helps you assess the market size, unique selling points (USPs), challenges, competition, and overall feasibility in Canada. MVPs ensure your business objectives are met with the essential functionalities needed to succeed."
        }
    ]
    return (
        <React.Fragment>
            <div className="SaasIndustries">
                <div className='container'>
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Key Benefits of MVP  <span> Development</span></h2>
                    </div>
                    <div className="row">

                        {slideData.map((item, index) => (
                            <div className="col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="1000" key={index}>
                                <div className="industry">
                                    <div className="block">
                                        <img src={item.imageSrc} alt="coreImg" />
                                        <div>
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MvpBenefits
