import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const ProjectSuccees = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/smm-1.svg",
            "title": "Uncertainty in AI's Business Impact",
          "description": "Unlock AI's transformative potential for your business. Our thorough assessment reveals how AI can streamline operations and elevate customer experiences, ensuring seamless alignment with your strategic goals."
        },
        {
          "imageSrc": "/images/services/smm-2.svg",
            "title": "Technical Feasibility of AI Projects",
          "description": "Ensure your AI projects are technically sound with our expert evaluation. We analyze your concepts to confirm their viability and align them for successful outcomes."
        },
        {
          "imageSrc": "/images/services/mvp-icon-2.svg",
            "title": "Evaluating AI's Role in Strategic Goals",
          "description": "Ensure your AI initiatives support your strategic goals for maximum business impact. We provide expert planning to integrate AI where it can deliver the greatest results."
        },
        {
          "imageSrc": "/images/services/smm-4.svg",
            "title": "Allocating Resources for AI Initiatives",
          "description": "Discover how AI can drive meaningful change in your business. We thoroughly assess its potential to optimize processes and elevate customer experiences, aligning technology with your long-term vision."
        },
        {
          "imageSrc": "/images/services/mvp-icon-1.svg",
            "title": "Managing Risk in AI Development",
          "description": "Minimize risks in AI development with our robust risk management strategies. We proactively identify challenges and implement safeguards to ensure your projects stay on course."
        },
        {
          "imageSrc": "/images/services/mvp-icon-3.svg",
            "title": "Scaling AI Solutions from Concept to Production",
          "description": "Accelerate the transition from PoC to full-scale AI production with our support. Our expertise guarantees smooth integration into your workflows, driving both innovation and sustainable growth."
        }
      ]
  return (
    <div className="seoServices">
    <div className="container">
        <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>How AI (PoC) and (MVP) Development Can
               <span> Accelerate Your Project’s Success.</span></h2>
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

export default ProjectSuccees